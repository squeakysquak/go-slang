import { heap_alloc, heap_get_child, heap_set_child, heap_temp_node_stash, heap_temp_node_unstash } from "../heap";
import { Boolean_alloc, is_True } from "./Boolean";
import { Frame_alloc } from "./Frame";
import { Number_alloc, Number_get } from "./Number";
import { Stack_alloc, Stack_clear, Stack_index_of, Stack_is_empty, Stack_pop, Stack_push, Stack_search } from "./Stack";
import VMType from "./VMType";

export function Goroutine_alloc(entry: number, env: number) {
    const pc = Number_alloc(entry);
    heap_temp_node_stash(pc);
    const os = Stack_alloc(); // stack of References to whatever
    heap_temp_node_stash(os);
    const rts = Stack_alloc(); // stack of Closures
    heap_temp_node_stash(rts);
    const ss = Stack_alloc(); // stack of pointers to channels (channels that this goroutine is waiting on)
    heap_temp_node_stash(ss);
    const alive = Boolean_alloc(true);
    heap_temp_node_stash(alive);
    const addr = heap_alloc(VMType.Goroutine, true, 6);
    heap_set_child(addr, 0, pc);
    heap_set_child(addr, 1, env);
    heap_set_child(addr, 2, os);
    heap_set_child(addr, 3, rts);
    heap_set_child(addr, 4, ss);
    heap_set_child(addr, 5, alive);
    heap_temp_node_unstash(); // alive
    heap_temp_node_unstash(); // ss
    heap_temp_node_unstash(); // rts
    heap_temp_node_unstash(); // os
    heap_temp_node_unstash(); // pc
    return addr;
}

export function Goroutine_get_pc(addr: number) {
    return heap_get_child(addr, 0);
}
export function Goroutine_set_pc(addr: number, new_pc: number) {
    return heap_set_child(addr, 0, new_pc);
}
export function Goroutine_inc_pc(addr: number) {
    return Goroutine_set_pc(addr, Number_alloc(Number_get(Goroutine_get_pc(addr)) + 1));
}
export function Goroutine_set_env(addr: number, ptr: number) {
    return heap_set_child(addr, 1, ptr);
}
export function Goroutine_get_env(addr: number) {
    return heap_get_child(addr, 1);
}
export function Goroutine_push_os(addr: number, ptr: number) {
    return Stack_push(heap_get_child(addr, 2), ptr);
}
export function Goroutine_pop_os(addr: number) {
    return Stack_pop(heap_get_child(addr, 2));
}
export function Goroutine_push_rts(addr: number, ptr: number) {
    return Stack_push(heap_get_child(addr, 3), ptr);
}
export function Goroutine_pop_rts(addr: number) {
    return Stack_pop(heap_get_child(addr, 3));
}
export function Goroutine_push_ss(addr: number, ptr: number) {
    return Stack_push(heap_get_child(addr, 4), ptr);
}
export function Goroutine_pop_ss(addr: number) {
    return Stack_pop(heap_get_child(addr, 4));
}
export function Goroutine_wait_for(addr: number, chan: number) {
    console.log("::::: Goroutine", addr, "is sleeping - waiting for chan", chan);
    return Goroutine_push_ss(addr, chan);
}
export function Goroutine_is_alive(addr: number) {
    return is_True(heap_get_child(addr, 5));
}
export function Goroutine_kill(addr: number) {
    console.log("::::: Goroutine", addr, "has terminated");
    const alive = Boolean_alloc(false);
    heap_temp_node_stash(alive);
    const res = heap_set_child(addr, 5, alive);
    heap_temp_node_unstash(); // alive
    return res;
}
export function Goroutine_is_running(addr: number) {
    return Goroutine_is_alive(addr) && Stack_is_empty(heap_get_child(addr, 4));
}
export function Goroutine_is_asleep(addr: number) {
    return !Goroutine_is_running(addr);
}
export function Goroutine_is_waiting_for(addr: number, chan: number) {
    return Stack_search(heap_get_child(addr, 4), chan);
}
export function Goroutine_wake(addr: number, chan: number) {
    console.log("::::: Goroutine", addr, "was woken by chan", chan);
    const ss = heap_get_child(addr, 4);
    const waker = Number_alloc(Stack_index_of(ss, chan));
    heap_temp_node_stash(waker);
    // push waker and ptr onto OS
    // Goroutine_push_os(addr, waker); // we're not set up to process wakers yet
    heap_temp_node_unstash(); // waker
    Stack_clear(ss);
}
