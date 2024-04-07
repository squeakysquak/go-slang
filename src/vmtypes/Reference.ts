import { heap_alloc, heap_get_child, heap_set_child } from "../heap";
import VMType from "./VMType";

export function Reference_alloc(ptr: number) {
    const addr = heap_alloc(VMType.Reference, true, 1);
    heap_set_child(addr, 0, ptr);
    return addr;
}

export function Reference_get<T extends number>(addr: number) {
    return heap_get_child(addr, 0) as T;
}
export function Reference_set<T extends number>(addr: number, ptr: T) {
    return heap_set_child(addr, 0, ptr);
}
