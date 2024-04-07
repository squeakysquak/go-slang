import { heap_alloc, heap_get_child, heap_set_child } from "../heap";
import VMType from "./VMType";

export function Closure_alloc(jump_addr: number, env: number) {
    const addr = heap_alloc(VMType.Closure, true, 2);
    heap_set_child(addr, 0, jump_addr);
    heap_set_child(addr, 1, env);
    return addr;
}

export function Closure_get_jump_addr(addr: number) {
    return heap_get_child(addr, 0);
}
export function Closure_get_env(addr: number) {
    return heap_get_child(addr, 1);
}
