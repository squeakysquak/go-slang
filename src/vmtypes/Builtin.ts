import { heap_alloc, heap_get_child, heap_set_child, heap_tag_get_type } from "../heap";
import VMType from "./VMType";

export function Builtin_alloc(builtin: number) {
    const addr = heap_alloc(VMType.Builtin, false, 1);
    heap_set_child(addr, 0, builtin);
    return addr;
}

export function Builtin_get(addr: number) {
    return heap_get_child(addr, 0);
}

export function is_Builtin(addr: number) {
    return heap_tag_get_type(addr) === VMType.Builtin;
}
