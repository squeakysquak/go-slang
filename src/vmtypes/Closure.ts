import { heap_alloc, heap_get_child, heap_set_child, heap_tag_get_type, heap_temp_node_stash, heap_temp_node_unstash } from "../heap";
import { Number_alloc } from "./Number";
import VMType from "./VMType";

export function Closure_alloc(jump_addr: number, env: number) {
    const jump_addr_number = Number_alloc(jump_addr);
    heap_temp_node_stash(jump_addr_number);
    const addr = heap_alloc(VMType.Closure, true, 2);
    heap_set_child(addr, 0, jump_addr_number);
    heap_set_child(addr, 1, env);
    heap_temp_node_unstash(); // jump_addr_number
    return addr;
}

export function Closure_get_jump_addr(addr: number) {
    return heap_get_child(addr, 0);
}
export function Closure_get_env(addr: number) {
    return heap_get_child(addr, 1);
}

export function is_Closure(addr: number) {
    return heap_tag_get_type(addr) === VMType.Closure;
}
