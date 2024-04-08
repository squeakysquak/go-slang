import { heap_alloc, heap_get_child, heap_set_child, temp_node_stash, temp_node_unstash } from "../heap";
import { Number_alloc } from "./Number";
import { Stack_alloc, Stack_clear, Stack_index_of, Stack_is_empty, Stack_pop, Stack_push, Stack_search } from "./Stack";
import { Type } from "./types";

export function Goroutine_alloc(entry: number) {
    const pc = Number_alloc(entry);
    temp_node_stash(pc);
    const env = Stack_alloc(); // stack of Environments
    temp_node_stash(env);
    const os = Stack_alloc(); // stack of whatever
    temp_node_stash(os);
    const rts = Stack_alloc(); // stack of Callframes/Blockframes
    temp_node_stash(rts);
    const ss = Stack_alloc(); // stack of pointers to channels (channels that this goroutine is waiting on)
    temp_node_stash(ss);
    const addr = heap_alloc(Type.Goroutine, true, 5);
    heap_set_child(addr, 0, pc);
    heap_set_child(addr, 1, env);
    heap_set_child(addr, 2, os);
    heap_set_child(addr, 3, rts);
    heap_set_child(addr, 4, ss);
    temp_node_unstash(); // ss
    temp_node_unstash(); // rts
    temp_node_unstash(); // os
    temp_node_unstash(); // env
    temp_node_unstash(); // pc
    return addr;
}

export function Goroutine_get_pc(addr: number) {
    return heap_get_child(addr, 0);
}
export function Goroutine_set_pc(addr: number, new_pc: number) {
    return heap_set_child(addr, 0, new_pc);
}
export function Goroutine_inc_pc(addr: number) {
    return Goroutine_set_pc(addr, Goroutine_get_pc(addr) + 1);
}
export function Goroutine_push_env(addr: number, ptr: number) {
    return Stack_push(heap_get_child(addr, 1), ptr);
}
export function Goroutine_pop_env(addr: number) {
    return Stack_pop(heap_get_child(addr, 1));
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
    return Goroutine_push_ss(addr, chan);
}
export function Goroutine_is_asleep(addr: number) {
    return !Stack_is_empty(heap_get_child(addr, 4));
}
export function Goroutine_is_waiting_for(addr: number, chan: number) {
    return Stack_search(heap_get_child(addr, 4), chan);
}
export function Goroutine_wake(addr: number, chan: number) {
    const ss = heap_get_child(addr, 4);
    const waker = Number_alloc(Stack_index_of(ss, chan));
    temp_node_stash(waker);
    // push waker and ptr onto OS
    Goroutine_push_os(addr, waker);
    temp_node_unstash(); // waker
    Stack_clear(ss);
}