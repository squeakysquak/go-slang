import builtins from "./builtins";
import { heap_add_root, heap_get_child, heap_initialise, heap_tag_get_n_children, heap_tag_get_type, heap_temp_node_stash, heap_temp_node_unstash } from "./heap";
import Instruction from "./types/Instruction";
import Opcode from "./types/Opcode";
import { Boolean_False, Boolean_alloc, is_Boolean, is_False, is_True } from "./vmtypes/Boolean";
import { Builtin_alloc, Builtin_get, is_Builtin } from "./vmtypes/Builtin";
import { Channel_try_recv, Channel_try_send } from "./vmtypes/Channel";
import { Closure_alloc, Closure_get_env, Closure_get_jump_addr, is_Closure } from "./vmtypes/Closure";
import { Frame_alloc, Frame_assign, Frame_get_par, Frame_retrieve } from "./vmtypes/Frame";
import { Goroutine_alloc, Goroutine_get_env, Goroutine_get_pc, Goroutine_inc_pc, Goroutine_is_alive, Goroutine_is_running, Goroutine_kill, Goroutine_pop_os, Goroutine_pop_rts, Goroutine_push_os, Goroutine_push_rts, Goroutine_set_env, Goroutine_set_pc } from "./vmtypes/Goroutine";
import { Number_alloc, Number_get, is_Number } from "./vmtypes/Number";
import { Reference_alloc, Reference_get, Reference_set, is_Reference } from "./vmtypes/Reference";
import { Stack_alloc, Stack_find, Stack_is_empty, Stack_pop, Stack_push } from "./vmtypes/Stack";
import VMType from "./vmtypes/VMType";

const DEBUG_RUNTIME = true;

const unop_microcode = new Map([
    [Opcode.UPLUS, (data: number) => {
        const num = Number_get(data);
        return Number_alloc(+num);
    }],
    [Opcode.UMINUS, (data: number) => {
        const num = Number_get(data);
        return Number_alloc(-num);
    }],
    [Opcode.NOT, (data: number) => {
        return Boolean_alloc(is_False(data));
    }],
    [Opcode.BITWISE_NOT, (data: number) => {
        throw Error("BITWISE_NOT: unimplemented");
        return -1;
    }],
    [Opcode.DEREF, (data: number) => {
        throw Error("DEREF: unimplemented");
        return -1;
    }],
    [Opcode.REF, (data: number) => {
        throw Error("REF: unimplemented");
        return -1;
    }],
]);
function unop_microcode_wrapper(opcode: Opcode): [Opcode, (gor: number, instr: Instruction) => void] {
    return [
        opcode,
        (gor: number, instr: Instruction) => {
            const data = Reference_get(Goroutine_pop_os(gor));
            const mc = unop_microcode.get(opcode);
            if (!mc) throw Error("unknown unary operator: " + opcode);
            const res = mc(data);
            heap_temp_node_stash(res);
            const ref_res = Reference_alloc(res);
            heap_temp_node_stash(ref_res);
            Goroutine_push_os(gor, ref_res);
            heap_temp_node_unstash(); // ref_res
            heap_temp_node_unstash(); // res
        }
    ];
}

const binop_microcode = new Map([
    [Opcode.MULT, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Number_alloc(num1 * num2);
    }],
    [Opcode.DIV, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Number_alloc(num1 / num2); // TODO: special handling for int division?
    }],
    [Opcode.MOD, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Number_alloc(num1 % num2);
    }],
    [Opcode.LSHIFT, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        throw Error("LSHIFT: unimplemented");
        return -1;
    }],
    [Opcode.RSHIFT, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        throw Error("RSHIFT: unimplemented");
        return -1;
    }],
    [Opcode.BITWISE_AND, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        throw Error("BITWISE_AND: unimplemented");
        return -1;
    }],
    [Opcode.BITWISE_CLEAR, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        throw Error("BITWISE_CLEAR: unimplemented");
        return -1;
    }],
    [Opcode.ADD, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Number_alloc(num1 + num2);
    }],
    [Opcode.SUB, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Number_alloc(num1 - num2);
    }],
    [Opcode.BITWISE_OR, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        throw Error("BITWISE_OR: unimplemented");
        return -1;
    }],
    [Opcode.BITWISE_XOR, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        throw Error("BITWISE_XOR: unimplemented");
        return -1;
    }],
    [Opcode.EQUALS, (data1: number, data2: number) => {
        if (is_Number(data1) && is_Number(data2)) {
            const num1 = Number_get(data1);
            const num2 = Number_get(data2);
            return Boolean_alloc(num1 === num2);
        } else if (is_Boolean(data1) && is_Boolean(data2)) {
            const bool1 = is_True(data1);
            const bool2 = is_True(data2);
            return Boolean_alloc(bool1 === bool2);
        }
        return Boolean_False; // throw error instead for unknown type combination?
    }],
    [Opcode.NOT_EQUALS, (data1: number, data2: number) => {
        if (is_Number(data1) && is_Number(data2)) {
            const num1 = Number_get(data1);
            const num2 = Number_get(data2);
            return Boolean_alloc(num1 !== num2);
        } else if (is_Boolean(data1) && is_Boolean(data2)) {
            const bool1 = is_True(data1);
            const bool2 = is_True(data2);
            return Boolean_alloc(bool1 !== bool2);
        }
        return Boolean_False; // throw error instead for unknown type combination?
    }],
    [Opcode.LESS, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Boolean_alloc(num1 < num2);
    }],
    [Opcode.LESS_OR_EQUALS, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Boolean_alloc(num1 <= num2);
    }],
    [Opcode.GREATER, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Boolean_alloc(num1 > num2);
    }],
    [Opcode.GREATER_OR_EQUALS, (data1: number, data2: number) => {
        const num1 = Number_get(data1);
        const num2 = Number_get(data2);
        return Boolean_alloc(num1 >= num2);
    }],
    [Opcode.AND, (data1: number, data2: number) => {
        const bool1 = is_True(data1);
        const bool2 = is_True(data2);
        return Boolean_alloc(bool1 && bool2);
    }],
    [Opcode.OR, (data1: number, data2: number) => {
        const bool1 = is_True(data1);
        const bool2 = is_True(data2);
        return Boolean_alloc(bool1 || bool2);
    }],
]);
function binop_microcode_wrapper(opcode: Opcode): [Opcode, (gor: number, instr: Instruction) => void] {
    return [
        opcode,
        (gor: number, instr: Instruction) => {
            const data2 = Reference_get(Goroutine_pop_os(gor));
            const data1 = Reference_get(Goroutine_pop_os(gor));
            const mc = binop_microcode.get(opcode);
            if (!mc) throw Error("unknown unary operator: " + opcode);
            const res = mc(data1, data2);
            heap_temp_node_stash(res);
            const ref_res = Reference_alloc(res);
            heap_temp_node_stash(ref_res);
            Goroutine_push_os(gor, ref_res);
            heap_temp_node_unstash(); // ref_res
            heap_temp_node_unstash(); // res
        }
    ];
}

const builtin_arg_arr: number[] = [];
const MAX_BUILTIN_ARGS = 8;
for (let i = 0; i < MAX_BUILTIN_ARGS; ++i) {
    builtin_arg_arr.push(-1);
}
const microcode = new Map([
    ///// Frames
    [Opcode.ENTER_BLOCK, (gor: number, instr: Instruction) => {
        const sz = instr.args[0] as number;
        const env = Goroutine_get_env(gor);
        const new_frame = Frame_alloc(sz, env);
        Goroutine_set_env(gor, new_frame);
    }],
    [Opcode.EXIT_BLOCK, (gor: number, instr: Instruction) => {
        const env = Goroutine_get_env(gor);
        Goroutine_set_env(gor, Frame_get_par(env));
    }],
    [Opcode.ASSIGN, (gor: number, instr: Instruction) => {
        const [depth, idx] = instr.args as [number, number];
        const env = Goroutine_get_env(gor);
        const data = Reference_get(Goroutine_pop_os(gor));
        Frame_assign(env, depth, idx, data);
    }],
    [Opcode.REASSIGN, (gor: number, instr: Instruction) => {
        const env = Goroutine_get_env(gor);
        const data = Reference_get(Goroutine_pop_os(gor));
        const target = Goroutine_pop_os(gor);
        Reference_set(target, data);
    }],

    ///// Operators
    // Unary operators
    unop_microcode_wrapper(Opcode.UPLUS),
    unop_microcode_wrapper(Opcode.UMINUS),
    unop_microcode_wrapper(Opcode.NOT),
    unop_microcode_wrapper(Opcode.BITWISE_NOT),
    unop_microcode_wrapper(Opcode.DEREF),
    unop_microcode_wrapper(Opcode.REF),
    // Binary operators
    binop_microcode_wrapper(Opcode.MULT),
    binop_microcode_wrapper(Opcode.DIV),
    binop_microcode_wrapper(Opcode.MOD),
    binop_microcode_wrapper(Opcode.LSHIFT),
    binop_microcode_wrapper(Opcode.RSHIFT),
    binop_microcode_wrapper(Opcode.BITWISE_AND),
    binop_microcode_wrapper(Opcode.BITWISE_CLEAR),
    binop_microcode_wrapper(Opcode.ADD),
    binop_microcode_wrapper(Opcode.SUB),
    binop_microcode_wrapper(Opcode.BITWISE_OR),
    binop_microcode_wrapper(Opcode.BITWISE_XOR),
    binop_microcode_wrapper(Opcode.EQUALS),
    binop_microcode_wrapper(Opcode.NOT_EQUALS),
    binop_microcode_wrapper(Opcode.LESS),
    binop_microcode_wrapper(Opcode.LESS_OR_EQUALS),
    binop_microcode_wrapper(Opcode.GREATER),
    binop_microcode_wrapper(Opcode.GREATER_OR_EQUALS),
    binop_microcode_wrapper(Opcode.AND),
    binop_microcode_wrapper(Opcode.OR),

    ///// OS manipulation
    [Opcode.LDCI, (gor: number, instr: Instruction) => {
        const num = instr.args[0] as number;
        const res = Number_alloc(num);
        heap_temp_node_stash(res);
        const ref_res = Reference_alloc(res);
        heap_temp_node_stash(ref_res);
        Goroutine_push_os(gor, ref_res);
        heap_temp_node_unstash(); // ref_res
        heap_temp_node_unstash(); // res
    }],
    [Opcode.LDCF, (gor: number, instr: Instruction) => {
        throw Error("LDCF: unimplemented");
    }],
    [Opcode.LDCB, (gor: number, instr: Instruction) => {
        const bool = instr.args[0] as boolean;
        const res = Boolean_alloc(bool);
        heap_temp_node_stash(res);
        const ref_res = Reference_alloc(res);
        heap_temp_node_stash(ref_res);
        Goroutine_push_os(gor, ref_res);
        heap_temp_node_unstash(); // ref_res
        heap_temp_node_unstash(); // res
    }],
    [Opcode.LDN, (gor: number, instr: Instruction) => {
        throw Error("LDN: unimplemented");
    }],
    [Opcode.LD, (gor: number, instr: Instruction) => {
        const [depth, idx] = instr.args as [number, number];
        const env = Goroutine_get_env(gor);
        const ref = Frame_retrieve(env, depth, idx);
        Goroutine_push_os(gor, ref);
    }],
    [Opcode.LDF, (gor: number, instr: Instruction) => {
        const entry_point_offset = instr.args[0] as number;
        const env = Goroutine_get_env(gor);
        const pc = Number_get(Goroutine_get_pc(gor));
        const entry_point = pc + entry_point_offset;
        const res = Closure_alloc(entry_point, env);
        heap_temp_node_stash(res);
        const ref_res = Reference_alloc(res);
        heap_temp_node_stash(ref_res);
        Goroutine_push_os(gor, ref_res);
        heap_temp_node_unstash(); // ref_res
        heap_temp_node_unstash(); // res
    }],
    [Opcode.POP, (gor: number, instr: Instruction) => {
        Goroutine_pop_os(gor);
    }],

    ///// Control flow
    [Opcode.JUMP, (gor: number, instr: Instruction) => {
        const offset = instr.args[0] as number;
        const pc = Number_get(Goroutine_get_pc(gor));
        const new_pc = Number_alloc(pc + offset);
        Goroutine_set_pc(gor, new_pc);
    }],
    [Opcode.JOF, (gor: number, instr: Instruction) => {
        const cond = Reference_get(Goroutine_pop_os(gor));
        if (is_False(cond)) {
            const offset = instr.args[0] as number;
            const pc = Number_get(Goroutine_get_pc(gor));
            const new_pc = Number_alloc(pc + offset);
            Goroutine_set_pc(gor, new_pc);
        }
    }],
    [Opcode.CALL, (gor: number, instr: Instruction) => {
        const builtin_or_closure = Reference_get(Goroutine_pop_os(gor));
        if (is_Builtin(builtin_or_closure)) {
            const num_args = instr.args[0] as number;
            if (num_args > MAX_BUILTIN_ARGS) throw Error("too many arguments to builtin");
            for (let i = num_args - 1; i >= 0; --i) {
                builtin_arg_arr[i] = Goroutine_pop_os(gor);
            }
            builtins[Builtin_get(builtin_or_closure)][1](gor, num_args, builtin_arg_arr);
            return;
        }
        const return_closure = Closure_alloc(Number_get(Goroutine_get_pc(gor)), Goroutine_get_env(gor));
        heap_temp_node_stash(return_closure);
        Goroutine_push_rts(gor, return_closure);
        heap_temp_node_unstash(); // return_closure
        Goroutine_set_pc(gor, Closure_get_jump_addr(builtin_or_closure));
        Goroutine_set_env(gor, Closure_get_env(builtin_or_closure));
    }],
    [Opcode.RETURN, (gor: number, instr: Instruction) => {
        const loop_depth = instr.args[0] as number;
        for (let i = 0; i < loop_depth; ++i) {
            Goroutine_pop_rts(gor); // continue_closure
            Goroutine_pop_rts(gor); // break_closure
        }
        const return_closure = Goroutine_pop_rts(gor);
        Goroutine_set_pc(gor, Closure_get_jump_addr(return_closure));
        Goroutine_set_env(gor, Closure_get_env(return_closure));
    }],
    [Opcode.INIT_LOOP, (gor: number, instr: Instruction) => {
        const [continue_offset, break_offset] = instr.args as [number, number];
        const continue_closure = Closure_alloc(Number_get(Goroutine_get_pc(gor)) + continue_offset, Goroutine_get_env(gor));
        heap_temp_node_stash(continue_closure);
        const break_closure = Closure_alloc(Number_get(Goroutine_get_pc(gor)) + break_offset, Goroutine_get_env(gor));
        heap_temp_node_stash(break_closure);
        Goroutine_push_rts(gor, break_closure);
        Goroutine_push_rts(gor, continue_closure);
        heap_temp_node_unstash(); // break_closure
        heap_temp_node_unstash(); // continue_closure
    }],
    [Opcode.EXIT_LOOP, (gor: number, instr: Instruction) => {
        Goroutine_pop_rts(gor); // continue_closure
        Goroutine_pop_rts(gor); // break_closure
    }],
    [Opcode.BREAK, (gor: number, instr: Instruction) => {
        Goroutine_pop_rts(gor); // continue_closure
        const break_closure = Goroutine_pop_rts(gor);
        Goroutine_set_pc(gor, Closure_get_jump_addr(break_closure));
        Goroutine_set_env(gor, Closure_get_env(break_closure));
    }],
    [Opcode.CONT, (gor: number, instr: Instruction) => {
        const continue_closure = Goroutine_pop_rts(gor); // continue_closure
        Goroutine_push_rts(gor, continue_closure); // put it back on the rts, don't actually want to remove it
        Goroutine_set_pc(gor, Closure_get_jump_addr(continue_closure));
        Goroutine_set_env(gor, Closure_get_env(continue_closure));
    }],
    [Opcode.DONE, (gor: number, instr: Instruction) => {
        Goroutine_kill(gor);
    }],

    ///// Concurrency control
    [Opcode.GO, (gor: number, instr: Instruction) => {
        const offset = instr.args[0] as number;
        const pc = Number_get(Goroutine_get_pc(gor));
        const new_gor = Goroutine_alloc(pc, Goroutine_get_env(gor));
        heap_temp_node_stash(new_gor);
        Stack_push(goroutines, new_gor);
        heap_temp_node_unstash(); // new_gor
        const new_pc = Number_alloc(pc + offset);
        Goroutine_set_pc(gor, new_pc);
    }],
    [Opcode.SEND, (gor: number, instr: Instruction) => {
        const val = Goroutine_pop_os(gor);
        const chan = Reference_get(Goroutine_pop_os(gor));
        heap_temp_node_stash(val);
        heap_temp_node_stash(chan);
        Channel_try_send(chan, gor, val);
        heap_temp_node_unstash(); // chan
        heap_temp_node_unstash(); // val
    }],
    [Opcode.RECV, (gor: number, instr: Instruction) => {
        const chan = Reference_get(Goroutine_pop_os(gor));
        heap_temp_node_stash(chan);
        Channel_try_recv(chan, gor);
        heap_temp_node_unstash(); //
    }],
]);

function debug_show_object(obj: number): any[] {
    const res = []
    if (obj === -1) {
        res.push("(nil)");
    } else if (is_Number(obj)) {
        res.push("(Number)", Number_get(obj));
    } else if (is_Boolean(obj)) {
        res.push("(Boolean)", is_True(obj));
    } else if (is_Closure(obj)) {
        res.push("(Closure)", "addr", Number_get(Closure_get_jump_addr(obj)), "env", Closure_get_env(obj));
    } else if (is_Reference(obj)) {
        res.push("(Reference) ->", Reference_get(obj), ...debug_show_object(Reference_get(obj)));
    } else if (is_Builtin(obj)) {
        res.push("(Builtin)", "id", Builtin_get(obj), builtins[Builtin_get(obj)][0]);
    } else {
        res.push("((" + VMType[heap_tag_get_type(obj)] + "))");
    }
    return res;
}

let goroutines: number;
let instr_list: Instruction[];
export function run(instrs: Instruction[]) {
    goroutines = Stack_alloc();
    instr_list = instrs;
    heap_add_root(goroutines);
    const main_env = Frame_alloc(builtins.length, -1);
    heap_temp_node_stash(main_env);
    for (let i = 0; i < builtins.length; ++i) {
        const builtin = Builtin_alloc(i);
        Frame_assign(main_env, 0, i, builtin);
    }
    const main_gor = Goroutine_alloc(0, main_env);
    heap_temp_node_stash(main_gor);
    Stack_push(goroutines, main_gor);
    heap_temp_node_unstash(); // main_env
    heap_temp_node_unstash(); // main_gor
    while (Goroutine_is_alive(main_gor)) {
        const running_gor = Stack_find(goroutines, Goroutine_is_running);
        if (running_gor === -1) {
            throw Error("all goroutines are asleep!");
        }
        const pc = Number_get(Goroutine_get_pc(running_gor));
        const instr = instrs[pc];
        if (DEBUG_RUNTIME) {
            console.log("Goroutine:", running_gor, "PC:", pc, "Ins:", instr);
            const os = [];
            const gor_os = heap_get_child(running_gor, 2);
            while (!Stack_is_empty(gor_os)) {
                os.push(Stack_pop(gor_os));
            }
            const os_text = [];
            for (let i = os.length - 1; i >= 0; --i) {
                Stack_push(gor_os, os[i]);
                const deref = Reference_get(os[i]);
                os_text.push("\n...", "ref", os[i], "=", deref);
                os_text.push(...debug_show_object(deref));
            }
            console.log("OS:", "length", os.length, ...os_text);
            const env = [];
            let cenv = Goroutine_get_env(running_gor);
            while (cenv != -1) {
                env.push(cenv);
                cenv = Frame_get_par(cenv);
            }
            const env_text = [];
            for (let i = 0; i < env.length; ++i) {
                const slots = heap_tag_get_n_children(env[i]) - 1;
                env_text.push("\n... depth", i, "=", env[i]);
                for (let j = 0; j < slots; ++j) {
                    const ref = heap_get_child(env[i], j + 1);
                    env_text.push("\n...", [i, j], "=", ref, ...debug_show_object(ref));
                }
            }
            console.log("ENV:", ...env_text);
            const rts = [];
            const gor_rts = heap_get_child(running_gor, 3);
            while (!Stack_is_empty(gor_rts)) {
                rts.push(Stack_pop(gor_rts));
            }
            const rts_text = [];
            for (let i = rts.length - 1; i >= 0; --i) {
                Stack_push(gor_rts, rts[i]);
                rts_text.push("\n...", "closure", rts[i], "=", "addr", Number_get(Closure_get_jump_addr(rts[i])), "env", Closure_get_env(rts[i]));
            }
            console.log("RTS:", "length", rts.length, ...rts_text);
        }
        Goroutine_inc_pc(running_gor);
        const instr_microcode = microcode.get(instr.opcode);
        if (!instr_microcode) throw Error("unknown opcode: " + instr.opcode);
        instr_microcode(running_gor, instr);
    }
}
