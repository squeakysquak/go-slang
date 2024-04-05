import { Type } from "./types";
import { heap_alloc, heap_get_child, heap_set_child, heap_tag_get_type } from "../heap";

export function Number_alloc(num: number = 0) {
    const addr = heap_alloc(Type.Number, false, 1);
    heap_set_child(addr, 0, num);
    return addr;
}

export function Number_get(addr: number) {
    return heap_get_child(addr, 0);
}

export function is_Number(addr: number) {
    return heap_tag_get_type(addr) === Type.Number;
}
