import { heap_alloc, heap_get_child, heap_set_child } from "../heap";
import VMType from "./VMType";

export function Array_alloc(len: number) {
    const addr = heap_alloc(VMType.Array, true, len);
    return addr;
}

export function Array_get(addr: number, idx: number) {
    return heap_get_child(addr, idx);
}
export function Array_set(addr: number, idx: number, val: number) {
    return heap_set_child(addr, idx, val);
}
