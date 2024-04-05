import { Type } from "./types";
import { heap_add_root, heap_alloc } from "../heap";

export const False = heap_alloc(Type.False, false, 0);
heap_add_root(False);

export const True = heap_alloc(Type.True, false, 0);
heap_add_root(True);

export function is_False(addr: number) {
    return addr === False;
}
export function is_True(addr: number) {
    return addr === True;
}

export function is_Boolean(addr: number) {
    return is_False(addr) || is_True(addr);
}
