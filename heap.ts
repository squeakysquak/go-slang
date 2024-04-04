let HEAP: DataView;
let heap_initialised = false;
let free = -1;

const N_NODES = 1024;

const WORD_SIZE = 8;
const NODE_SIZE = 8; // [tag(1w) {type-tag(1b), gc-mark(1b), children-are-pointers(1b), unused(1b), n-children(4b)}, children(6w), cont(1w)]
const TYPE_OFFSET = 0;
const MARK_OFFSET = 1;
const CHILDREN_ARE_POINTERS_OFFSET = 2;
const CHILDREN_OFFSET = 4;
const CONT_OFFSET = 7;

///// Raw word get/set

function heap_get(addr: number) {
    return HEAP.getFloat64(addr);
}
function heap_set(addr: number, val: number) {
    return HEAP.setFloat64(addr, val);
}

///// Tag get/set

export function heap_tag_get_type(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + TYPE_OFFSET);
}
function heap_tag_set_type(addr: number, type: number) {
    return HEAP.setInt8(addr * WORD_SIZE + TYPE_OFFSET, type);
}
function heap_tag_get_mark(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + MARK_OFFSET) === 1;
}
function heap_tag_set_mark(addr: number, mark: boolean) {
    return HEAP.setInt8(addr * WORD_SIZE + MARK_OFFSET, mark ? 1 : 0);
}
function heap_tag_get_children_are_pointers(addr: number) {
    return HEAP.getInt8(addr * WORD_SIZE + CHILDREN_ARE_POINTERS_OFFSET) === 1;
}
function heap_tag_set_children_are_pointers(addr: number, children_are_pointers: boolean) {
    return HEAP.setInt8(addr * WORD_SIZE + CHILDREN_ARE_POINTERS_OFFSET, children_are_pointers ? 1 : 0);
}
export function heap_tag_get_n_children(addr: number) {
    return HEAP.getInt32(addr * WORD_SIZE + CHILDREN_OFFSET);
}
function heap_tag_set_n_children(addr: number, n_children: number) {
    return HEAP.setInt32(addr * WORD_SIZE + CHILDREN_OFFSET, n_children);
}

///// Node cont get/set

function heap_node_get_cont(addr: number) {
    return heap_get(addr + CONT_OFFSET);
}
function heap_node_set_cont(addr: number, cont_addr: number) {
    return heap_set(addr + CONT_OFFSET, cont_addr);
}

///// Get children

export function heap_get_child(addr: number, child_index: number) {
    const n_children = heap_tag_get_n_children(addr);
    if (child_index >= n_children || child_index < 0) {
        throw Error("heap_get_child: invalid child index");
    }
    child_index += 1;
    const num_follows = Math.floor(child_index / 7);
    for (let i = 0; i < num_follows; ++i) {
        addr = heap_node_get_cont(addr);
    }
    return heap_get(addr + (child_index % 7));
}
export function heap_set_child(addr: number, child_index: number, val: number) {
    const n_children = heap_tag_get_n_children(addr);
    if (child_index >= n_children || child_index < 0) {
        throw Error("heap_set_child: invalid child index");
    }
    child_index += 1;
    const num_follows = Math.floor(child_index / 7);
    for (let i = 0; i < num_follows; ++i) {
        addr = heap_node_get_cont(addr);
    }
    return heap_set(addr + (child_index % 7), val);
}

///// GC

let roots: Set<number> = new Set(); // GC roots - start from these to mark reachable nodes
let temp_nodes: number[] = []; // nodes to be considered marked - may not be safe to physically set mark on these addresses as some may not have a tag word
let temp_node_set: Set<number> = new Set(); // will be populated from temp_nodes during GC operation

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

function run_gc() { // TODO
    throw Error("run_gc: not implemented");
}

///// alloc/free routines

export function heap_alloc(type: number, children_are_pointers: boolean, n_children: number) {
    const n_nodes = Math.floor(n_children / 7) + 1;
    for (let i = 0; i < n_nodes; ++i) {
        if (free === -1) {
            run_gc();
        }
        if (free === -1) {
            throw Error("heap_alloc: out of memory");
        }
        temp_node_stash(free);
        free = heap_get(free);
    }
    let addr = -1;
    for (let i = 0; i < n_nodes; ++i) {
        let temp = temp_node_unstash();
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
    const n_nodes = Math.floor(n_children / 7) + 1;
    for (let i = 0; i < n_nodes; ++i) {
        heap_set(addr, free);
        free = addr;
    }
}

///// Initialisation

function heap_initialise(n_nodes: number) {
    const data = new ArrayBuffer(n_nodes * NODE_SIZE * WORD_SIZE);
    const view = new DataView(data);
    HEAP = view;
    free = -1;
    for (let i = 0; i < n_nodes; ++i) {
        const addr = i * NODE_SIZE * WORD_SIZE;
        heap_set(addr, free);
        free = addr;
    }
    heap_initialised = true;
}

heap_initialise(N_NODES);
