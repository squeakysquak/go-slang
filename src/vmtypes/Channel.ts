import { heap_alloc, heap_get_child, heap_set_child, heap_tag_get_type, heap_temp_node_stash, heap_temp_node_unstash } from "../heap";
import { Array_alloc } from "./Array";
import { Boolean_alloc, is_True } from "./Boolean";
import { Goroutine_is_waiting_for, Goroutine_push_os, Goroutine_wait_for, Goroutine_wake } from "./Goroutine";
import { Number_alloc, Number_get, Number_set } from "./Number";
import { Reference_alloc } from "./Reference";
import { Stack_alloc, Stack_is_empty, Stack_pop, Stack_push } from "./Stack";
import VMType from "./VMType";

export function Channel_alloc(slots: number = 0) {
    const ps = Stack_alloc(); // stack of pending sends
    heap_temp_node_stash(ps);
    const gs = Stack_alloc(); // stack of goroutines that are waiting on this channel
    heap_temp_node_stash(gs);
    const arr = slots ? Array_alloc(slots) : -1; // array of slots for values
    heap_temp_node_stash(arr);
    const arrLen = Number_alloc(slots); // number of available slots
    heap_temp_node_stash(arrLen);
    const pos = Number_alloc(0); // position of the next slot
    heap_temp_node_stash(pos);
    const alive = Boolean_alloc(true);
    heap_temp_node_stash(alive);
    const addr = heap_alloc(VMType.Channel, true, 6);
    heap_set_child(addr, 0, ps);
    heap_set_child(addr, 1, gs);
    heap_set_child(addr, 2, arr);
    heap_set_child(addr, 3, arrLen);
    heap_set_child(addr, 4, pos);
    heap_set_child(addr, 5, alive);
    heap_temp_node_unstash(); // alive
    heap_temp_node_unstash(); // pos
    heap_temp_node_unstash(); // arrLen
    heap_temp_node_unstash(); // arr
    heap_temp_node_unstash(); // gs
    heap_temp_node_unstash(); // ps
    return addr;
}

export function Channel_get_max_capacity(addr: number) {
    return Number_get(heap_get_child(addr, 3));
}
export function Channel_get_next_slot(addr: number) {
    return Number_get(heap_get_child(addr, 4));
}
export function Channel_get_current_capacity(addr: number) {
    return Channel_get_max_capacity(addr) - Channel_get_next_slot(addr);
}
export function Channel_has_blocking_sender(addr: number) {
    return !Stack_is_empty(heap_get_child(addr, 0));
}
export function Channel_has_blocking_receiver(addr: number) {
    return !Stack_is_empty(heap_get_child(addr, 1)) && !Channel_has_blocking_sender(addr);
}
export function Channel_is_alive(addr: number) {
    return is_True(heap_get_child(addr, 5));
}

export function Channel_close(addr: number) {
    if (!Channel_is_alive(addr)) {
        throw Error("channel is already closed");
    }
    if (Channel_has_blocking_sender(addr)) {
        const gs = heap_get_child(addr, 1);
        while (!Stack_is_empty(gs)) {
            const waiting_gor = Stack_pop(gs);
            if (Goroutine_is_waiting_for(waiting_gor, addr)) {
                // stop sleeping
                Goroutine_wake(waiting_gor, addr);
            }
            // else: goroutine probably got woken by something else, and isn't actually waiting for me right now
        }
        // there are no more goroutines waiting
    } else if (Channel_has_blocking_receiver(addr)) {
        const gs = heap_get_child(addr, 1);
        const num = Number_alloc(0);
        heap_temp_node_stash(num);
        const ref = Reference_alloc(num);
        heap_temp_node_stash(ref);
        while (!Stack_is_empty(gs)) {
            const waiting_gor = Stack_pop(gs);
            if (Goroutine_is_waiting_for(waiting_gor, addr)) {
                // give it a value
                Goroutine_push_os(waiting_gor, ref);
                Goroutine_wake(waiting_gor, addr);
            }
            // else: goroutine probably got woken by something else, and isn't actually waiting for me right now
        }
        heap_temp_node_unstash(); // ref
        heap_temp_node_unstash(); // num
        // there are no more goroutines waiting 
    }
    const alive = Boolean_alloc(false);
    heap_temp_node_stash(alive);
    heap_set_child(addr, 5, alive);
    heap_temp_node_unstash(); // alive
}

export function Channel_try_send(addr: number, gor: number, ptr: number) { // return true if blocking
    if (!Channel_is_alive(addr)) {
        throw Error("can't send to a closed channel");
    }

    if (Channel_has_blocking_sender(addr)) {
        const ps = heap_get_child(addr, 0);
        const gs = heap_get_child(addr, 1);
        while (!Stack_is_empty(gs)) {
            const val = Stack_pop(ps);
            const waiting_gor = Stack_pop(gs);
            if (Goroutine_is_waiting_for(waiting_gor, addr)) {
                Goroutine_push_os(gor, val);
                Goroutine_wake(waiting_gor, addr);
                return false;
            }
            // else: goroutine probably got woken by something else, and isn't actually waiting for me right now
        }
        // there are no more goroutines waiting
    }
    if (Channel_has_blocking_receiver(addr)) {
        const gs = heap_get_child(addr, 1);
        while (!Stack_is_empty(gs)) {
            const waiting_gor = Stack_pop(gs);
            if (Goroutine_is_waiting_for(waiting_gor, addr)) {
                Goroutine_push_os(waiting_gor, ptr); // put the received value onto the OS
                Goroutine_wake(waiting_gor, addr);
                return false;
            }
            // else: goroutine probably got woken by something else, and isn't actually waiting for me right now
        }
        // there are no more goroutines waiting 
    }
    const maxCap = Channel_get_max_capacity(addr);
    const nextSlot = Channel_get_next_slot(addr);
    if (maxCap - nextSlot > 0) {
        heap_set_child(heap_get_child(addr, 2), nextSlot, ptr);
        Number_set(heap_get_child(addr, 4), nextSlot + 1);
        return false;
    }
    Stack_push(heap_get_child(addr, 0), ptr);
    Stack_push(heap_get_child(addr, 1), gor);
    Goroutine_wait_for(gor, addr);
    return true;
}
export function Channel_try_recv(addr: number, gor: number) { // return true if blocking
    if (!Channel_is_alive(addr)) {
        // immediately return a value
        const num = Number_alloc(0);
        heap_temp_node_stash(num);
        const ref = Reference_alloc(num);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref);
        heap_temp_node_unstash(); // ref
        heap_temp_node_unstash(); // num
        return false;
    }
    if (Channel_has_blocking_sender(addr)) {
        const ps = heap_get_child(addr, 0);
        const gs = heap_get_child(addr, 1);
        while (!Stack_is_empty(gs)) {
            const val = Stack_pop(ps);
            const waiting_gor = Stack_pop(gs);
            if (Goroutine_is_waiting_for(waiting_gor, addr)) {
                Goroutine_push_os(gor, val);
                Goroutine_wake(waiting_gor, addr);
                return false;
            }
            // else: goroutine probably got woken by something else, and isn't actually waiting for me right now
        }
        // there are no more goroutines waiting
    }
    const nextSlot = Channel_get_next_slot(addr);
    if (nextSlot > 0) {
        const ptr = heap_get_child(heap_get_child(addr, 2), nextSlot - 1);
        Goroutine_push_os(gor, ptr);
        Number_set(heap_get_child(addr, 4), nextSlot - 1);
        return false;
    }
    Stack_push(heap_get_child(addr, 1), gor);
    Goroutine_wait_for(gor, addr);
    return true;
}
export function is_Channel(addr: number) {
    return heap_tag_get_type(addr) === VMType.Channel;
}
