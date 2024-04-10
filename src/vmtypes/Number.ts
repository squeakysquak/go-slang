import { heap_alloc, heap_get_child, heap_set_child, heap_tag_get_type } from "../heap";
import VMType from "./VMType";

export function Number_alloc(num: number = 0) {
    const addr = heap_alloc(VMType.Number, false, 1);
    heap_set_child(addr, 0, num);
    return addr;
}

export function Number_get(addr: number) {
    return heap_get_child(addr, 0);
}
export function Number_set(addr: number, num: number) {
    return heap_set_child(addr, 0, num);
}

export function is_Number(addr: number) {
    return heap_tag_get_type(addr) === VMType.Number;
}
