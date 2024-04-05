import { Type } from "./types";
import { heap_alloc, heap_free, heap_get_child, heap_set_child } from "../heap";

// Stack is useful for putting things like OS, RTS, etc. in the heap.

function Stack_get_next(addr: number) {
    return heap_get_child(addr, 5);
}
function Stack_set_next(addr: number, next: number) {
    return heap_set_child(addr, 5, next);
}
function Stack_is_full(addr: number) {
    return heap_get_child(addr, 4) !== -1;
}

export function Stack_alloc() {
    const addr = heap_alloc(Type.Stack, true, 6);
    for (let i = 0; i < 6; ++i) {
        heap_set_child(addr, i, -1);
    }
    return addr;
}
export function Stack_free(addr: number) { // doesn't free the pointers it contains
    const next = Stack_get_next(addr);
    if (next !== -1) Stack_free(next);
    heap_free(addr);
}

export function Stack_push(addr: number, ptr: number) {
    if (Stack_is_full(addr)) {
        const next = heap_alloc(Type.Stack, true, 6);
        for (let i = 0; i < 6; ++i) {
            heap_set_child(next, i, heap_get_child(addr, i));
            heap_set_child(addr, i, -1);
        }
        Stack_set_next(addr, next);
    }
    for (let i = 0; i < 5; ++i) {
        if (heap_get_child(addr, i) === -1) {
            heap_set_child(addr, i, ptr);
            return;
        }
    }
}
export function Stack_pop(addr: number) {
    for (let i = 4; i >= 0; --i) {
        const ptr = heap_get_child(addr, i);
        if (ptr !== -1) {
            heap_set_child(addr, i, -1);
            return ptr;
        }
    }
    const next = Stack_get_next(addr);
    if (next === -1) {
        throw Error("Stack_pop: stack is empty");
    }
    for (let i = 0; i < 6; ++i) {
        heap_set_child(addr, i, heap_get_child(next, i));
    }
    heap_free(next);
    const ptr = heap_get_child(addr, 4);
    heap_set_child(addr, 4, -1);
    return ptr;
}
export function Stack_is_empty(addr: number) {
    return Stack_get_next(addr) === -1 && heap_get_child(addr, 0) === -1;
}
