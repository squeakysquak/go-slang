import { heap_add_root, heap_alloc } from "../heap";
import VMType from "./VMType";

export const Boolean_False = heap_alloc(VMType.False, false, 0);
heap_add_root(Boolean_False);

export const Boolean_True = heap_alloc(VMType.True, false, 0);
heap_add_root(Boolean_True);

export function is_False(addr: number) {
    return addr === Boolean_False;
}
export function is_True(addr: number) {
    return addr === Boolean_True;
}

export function Boolean_alloc(b: boolean) {
    return b ? Boolean_True : Boolean_False;
}

export function is_Boolean(addr: number) {
    return is_False(addr) || is_True(addr);
}
