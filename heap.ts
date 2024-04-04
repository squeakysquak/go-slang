let HEAP: DataView;
let heap_initialised = false;
let free = -1;

const N_NODES = 1024;

const WORD_SIZE = 8;
const NODE_SIZE = 8; // [tag(1w) {type-tag(1b), gc-mark(1b), children-are-pointers(1b), is-free(1b), n-children(4b)}, children(6w), cont(1w)]
const TYPE_OFFSET = 0;
const MARK_OFFSET = 1;
const CHILDREN_ARE_POINTERS_OFFSET = 2;
const FREE_OFFSET = 3;
const CHILDREN_OFFSET = 4;
const CONT_OFFSET = 7;

///// Raw word get/set

export function heap_get(addr: number) {
    return HEAP.getFloat64(addr);
}
export function heap_set(addr: number, val: number) {
    return HEAP.setFloat64(addr, val);
}

///// Tag get/set

export function heap_tag_get_type(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + TYPE_OFFSET);
}
export function heap_tag_set_type(addr: number, type: number) {
    return HEAP.setInt8(addr * WORD_SIZE + TYPE_OFFSET, type);
}
export function heap_tag_get_mark(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + MARK_OFFSET) === 1;
}
export function heap_tag_set_mark(addr: number, mark: boolean) {
    return HEAP.setInt8(addr * WORD_SIZE + MARK_OFFSET, mark ? 1 : 0);
}
export function heap_tag_get_children_are_pointers(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + CHILDREN_ARE_POINTERS_OFFSET) === 1;
}
export function heap_tag_set_children_are_pointers(addr: number, children_are_pointers: boolean) {
    return HEAP.setInt8(addr * WORD_SIZE + CHILDREN_ARE_POINTERS_OFFSET, children_are_pointers ? 1 : 0);
}
export function heap_tag_get_free(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + FREE_OFFSET) === 1;
}
export function heap_tag_set_free(addr: number, is_free: boolean) {
    return HEAP.setInt8(addr * WORD_SIZE + FREE_OFFSET, is_free ? 1 : 0);
}
export function heap_tag_get_n_children(addr: number) {
    return HEAP.getInt32(addr * WORD_SIZE + CHILDREN_OFFSET);
}
export function heap_tag_set_n_children(addr: number, n_children: number) {
    return HEAP.setInt32(addr * WORD_SIZE + CHILDREN_OFFSET, n_children);
}

///// Node cont get/set

export function heap_node_get_cont(addr: number) {
    return heap_get(addr + CONT_OFFSET);
}
export function heap_node_set_cont(addr: number, cont_addr: number) {
    return heap_set(addr + CONT_OFFSET, cont_addr);
}

///// Get children

export function heap_get_child(addr: number, child_index: number) {
    const n_children = heap_tag_get_n_children(addr);
    if (child_index >= n_children || child_index < 0) {
        throw Error("heap_get_child: invalid child index");
    }
    const num_follows = Math.floor(child_index / 6);
    for (let i = 0; i < num_follows; ++i) {
        addr = heap_node_get_cont(addr);
    }
    return heap_get(addr + 1 + (child_index % 6));
}
export function heap_set_child(addr: number, child_index: number, val: number) {
    const n_children = heap_tag_get_n_children(addr);
    if (child_index >= n_children || child_index < 0) {
        throw Error("heap_set_child: invalid child index");
    }
    const num_follows = Math.floor(child_index / 6);
    for (let i = 0; i < num_follows; ++i) {
        addr = heap_node_get_cont(addr);
    }
    return heap_set(addr + 1 + (child_index % 6), val);
}

///// GC

let roots: Set<number> = new Set(); // GC roots - start from these to mark reachable nodes
let temp_nodes: number[] = []; // nodes to be considered marked

export function heap_add_root(addr: number) {
    roots.add(addr);
}
export function heap_remove_root(addr: number) {
    return roots.delete(addr);
}

export function temp_node_stash(addr: number) {
    return temp_nodes.push(addr); // allocation of any given object should have an upper bound on the number of stashed allocations, and can be treated as constant memory
}
export function temp_node_unstash() {
    if (temp_nodes.length === 0) {
        throw Error("temp_node_unstash: internal error - temp_nodes is invalid");
    }
    return temp_nodes.pop() as number; // this is safe as temp_nodes is not empty
}

function mark(addr: number) {
    if (addr === -1) return;
    if (heap_tag_get_mark(addr)) return;
    heap_tag_set_mark(addr, true);
    if (!heap_tag_get_children_are_pointers(addr)) return;
    const n_children = heap_tag_get_n_children(addr);
    const n_nodes = Math.ceil(n_children / 6);
    for (let i = 0; i < n_nodes; ++i) {
        for (let j = 0; j < 6; ++j) {
            const child = heap_get(addr + 1 + j);
            mark(child);
        }
        heap_tag_set_mark(addr, true);
        addr = heap_node_get_cont(addr);
    }
}
function sweep() {
    for (let i = 0; i < N_NODES; ++i) {
        const addr = i * NODE_SIZE * WORD_SIZE;
        if (heap_tag_get_mark(addr)) {
            heap_tag_set_mark(addr, false);
            continue;
        }
        if (!heap_tag_get_free(addr)) {
            heap_rawfree(addr);
        }
    }
}

export function run_gc() {
    for (let i = 0; i < temp_nodes.length; ++i) {
        heap_tag_set_mark(temp_nodes[i], true);
    }
    const it = roots.entries();
    for (const i of it) {
        mark(i[0]);
    }
    sweep();
}

///// alloc/free routines

export function heap_rawalloc() {
    if (free === -1) {
        run_gc();
    }
    if (free === -1) {
        throw Error("heap_alloc: out of memory");
    }
    const addr = free;
    heap_tag_set_free(addr, false);
    free = heap_node_get_cont(addr);
    return addr;
}
export function heap_rawfree(addr: number) {
    heap_node_set_cont(addr, free);
    heap_tag_set_free(addr, true);
    free = addr;
}

export function heap_alloc(type: number, children_are_pointers: boolean, n_children: number) {
    const n_nodes = Math.max(1, Math.ceil(n_children / 6));
    for (let i = 0; i < n_nodes; ++i) {
        temp_node_stash(heap_rawalloc());
    }
    let addr = -1;
    for (let i = 0; i < n_nodes; ++i) {
        const temp = temp_node_unstash();
        heap_node_set_cont(temp, addr);
        addr = temp;
    }
    heap_tag_set_type(addr, type);
    heap_tag_set_mark(addr, false);
    heap_tag_set_children_are_pointers(addr, children_are_pointers);
    heap_tag_set_n_children(addr, n_children);
    return addr;
}
export function heap_free(addr: number) {
    const n_children = heap_tag_get_n_children(addr);
    const n_nodes = Math.max(1, Math.ceil(n_children / 6));
    for (let i = 0; i < n_nodes; ++i) {
        const next = heap_node_get_cont(addr);
        heap_rawfree(addr);
        addr = next;
    }
}

///// Initialisation

function heap_initialise() {
    const data = new ArrayBuffer(N_NODES * NODE_SIZE * WORD_SIZE);
    const view = new DataView(data);
    HEAP = view;
    free = -1;
    for (let i = 0; i < N_NODES; ++i) {
        const addr = i * NODE_SIZE * WORD_SIZE;
        heap_node_set_cont(addr, free);
        heap_tag_set_free(addr, true);
        free = addr;
    }
    heap_initialised = true;
}

heap_initialise();
