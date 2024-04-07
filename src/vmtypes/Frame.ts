import { heap_alloc, heap_get_child, heap_set_child, temp_node_stash } from "../heap";
import { Reference_alloc, Reference_set } from "./Reference";
import VMType from "./VMType";

export function Frame_alloc(size: number, par: number) {
    const addr = heap_alloc(VMType.Frame, true, size + 1);
    temp_node_stash(addr);
    for (let i = 1; i < size + 1; ++i) {
        const box = Reference_alloc(-1);
        heap_set_child(addr, i, box);
    }
    heap_set_child(addr, 0, par);
    return addr;
}

export function Frame_get_par(addr: number) {
    return heap_get_child(addr, 0);
}

export function Frame_assign(addr: number, depth: number, idx: number, ptr: number) {
    for (let i = 0; i < depth; ++i) {
        if (addr === -1) throw Error("Frame_assign: frame at that depth does not exist");
        addr = Frame_get_par(addr);
    }
    Reference_set(heap_get_child(addr, idx + 1), ptr);
}

// caution: returns a reference, not the actual object itself
export function Frame_retrieve(addr: number, depth: number, idx: number) {
    for (let i = 0; i < depth; ++i) {
        if (addr === -1) throw Error("Frame_retrieve: frame at that depth does not exist");
        addr = Frame_get_par(addr);
    }
    return heap_get_child(addr, idx + 1);
}
