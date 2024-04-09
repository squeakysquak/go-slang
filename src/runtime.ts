import { heap_add_root, heap_get_child, heap_initialise, heap_tag_get_n_children, heap_tag_get_type, heap_temp_node_stash, heap_temp_node_unstash } from "./heap";
import Instruction from "./types/Instruction";
import Opcode from "./types/Opcode";
import { Boolean_False, Boolean_alloc, is_Boolean, is_True } from "./vmtypes/Boolean";
import { Closure_alloc, Closure_get_env, Closure_get_jump_addr, is_Closure } from "./vmtypes/Closure";
import { Frame_alloc, Frame_assign, Frame_get_par, Frame_retrieve } from "./vmtypes/Frame";
import { Goroutine_alloc, Goroutine_get_env, Goroutine_get_pc, Goroutine_inc_pc, Goroutine_is_running, Goroutine_pop_os, Goroutine_pop_rts, Goroutine_push_os, Goroutine_push_rts, Goroutine_set_env, Goroutine_set_pc } from "./vmtypes/Goroutine";
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
        return Boolean_alloc(is_True(data));
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
    [Opcode.RECV, (data: number) => {
        throw Error("RECV: unimplemented");
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
    unop_microcode_wrapper(Opcode.RECV),
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
    [Opcode.CALL, (gor: number, instr: Instruction) => { // TODO: handle builtins
        const num_params = instr.args[0] as number; // unused, except for builtins
        const return_closure = Closure_alloc(Number_get(Goroutine_get_pc(gor)), Goroutine_get_env(gor));
        heap_temp_node_stash(return_closure);
        Goroutine_push_rts(gor, return_closure);
        heap_temp_node_unstash(); // return_closure
        const closure = Reference_get(Goroutine_pop_os(gor));
        Goroutine_set_pc(gor, Closure_get_jump_addr(closure));
        Goroutine_set_env(gor, Closure_get_env(closure));
    }],
    [Opcode.RETURN, (gor: number, instr: Instruction) => {
        const return_closure = Goroutine_pop_rts(gor);
        Goroutine_set_pc(gor, Closure_get_jump_addr(return_closure));
        Goroutine_set_env(gor, Closure_get_env(return_closure));
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
    } else {
        res.push("((" + VMType[heap_tag_get_type(obj)] + "))");
    }
    return res;
}

export function run(instrs: Instruction[]) {
    const gors = Stack_alloc();
    heap_add_root(gors);
    const main_gor = Goroutine_alloc(0);
    heap_temp_node_stash(main_gor);
    Stack_push(gors, main_gor);
    heap_temp_node_unstash(); // main_gor
    while (instrs[Number_get(Goroutine_get_pc(main_gor))].opcode !== Opcode.DONE) {
        const running_gor = Stack_find(gors, Goroutine_is_running);
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


// function run() {
//     let i = 0;
//     while (Instrs[PC].opcode != Opcode.DONE) {
//         if (++i > 200) throw Error("naw mate");
//         const instr = Instrs[PC++]
//         console.log(instr);

//         microcode(instr);
//         console.log("Operand Stack: ", OS);
//         console.log("Environment: ", ENV);
//         console.log("RTS:", RTS);
//     }
//     //console.log("Final Environment: ", ENV);
//     console.log("Final Operand Stack: ", OS);
//     console.log("Final RTS:", RTS);
//     console.log("Evaluated: " + OS.pop());
// }

// function microcode(instr: Instruction) {
//     switch (instr.opcode) {
//         case Opcode.POP:
//             OS.pop();
//             break;
//         case Opcode.JUMP:
//             PC += (instr.args[0] as number)
//             break;
//         case Opcode.ENTER_BLOCK:
//             A = instr.args[0] as number;
//             pushFrame(A);
//             break;
//         case Opcode.EXIT_BLOCK:
//             popFrame();
//             break;
//         case Opcode.LDF:
//             OS.push([[PC + (instr.args[0] as number), ENV]]);
//             break;
//         case Opcode.LDCI:
//             OS.push([instr.args[0]]); // entry_point / num
//             break;
//         case Opcode.LDCB:
//             OS.push([instr.args[0]]); // bool
//             break;
//         case Opcode.ADD:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B + A]); // num1 + num2
//             break;
//         case Opcode.SUB:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B - A]); // num1 - num2
//             break;
//         case Opcode.UMINUS:
//             A = OS.pop()[0]; // num
//             OS.push([-A]);
//             break;
//         case Opcode.MULT:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B * A]); // num1 * num2
//             break;
//         case Opcode.DIV:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B / A]); // num1 / num2 // TODO: special handling for int division?
//             break;
//         case Opcode.MOD:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B % A]); // num1 % num2
//             break;
//         case Opcode.OR:
//             A = OS.pop()[0]; // bool2
//             B = OS.pop()[0]; // bool1
//             OS.push([B || A]); // bool1 || bool2
//             break;
//         case Opcode.AND:
//             A = OS.pop()[0]; // bool2
//             B = OS.pop()[0]; // bool1
//             OS.push([B && A]); // bool1 && bool2
//             break;
//         case Opcode.NOT:
//             A = OS.pop()[0]; // bool
//             OS.push([!A]);
//             break;
//         case Opcode.EQUALS:
//             A = OS.pop()[0]; // o2
//             B = OS.pop()[0]; // o1
//             OS.push([B === A]); // o1 == o2
//             break;
//         case Opcode.NOT_EQUALS:
//             A = OS.pop()[0]; // o2
//             B = OS.pop()[0]; // o1
//             OS.push([B !== A]); // o1 != o2
//             break;
//         case Opcode.LESS:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B < A]); // num1 < num2
//             break;
//         case Opcode.LESS_OR_EQUALS:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B <= A]); // num1 <= num2
//             break;
//         case Opcode.GREATER:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B > A]); // num1 > num2
//             break;
//         case Opcode.GREATER_OR_EQUALS:
//             A = OS.pop()[0]; // num2
//             B = OS.pop()[0]; // num1
//             OS.push([B >= A]); // num1 >= num2
//             break;
//         case Opcode.ASSIGN:
//             A = instr.args[0]; // depth
//             B = instr.args[1]; // idx
//             C = OS.pop()[0]; // data
//             ENV.assign([A, B], C);
//             //console.log(ENV);
//             //console.log(OS);
//             break;
//         case Opcode.REASSIGN:
//             //console.log(PC);
//             //console.log(OS);
//             //console.log(ENV);
//             A = OS.pop(); // value
//             B = OS.pop(); // target
//             B[0] = A[0];
//             //console.log(OS);
//             //console.log(ENV);
//             break;
//         case Opcode.LD:
//             A = instr.args[0]; // depth
//             B = instr.args[1]; // idx
//             OS.push(ENV.retrieve([A, B]));
//             //console.log("ENV: ", ENV);
//             //console.log("OS: ", OS);
//             break;
//         case Opcode.CALL:
//             A = OS.pop()[0]; // func
//             RTS.push([PC, ENV]); // return to here
//             [PC, ENV] = A;
//             // A = [] //args
//             // for (let i = instr.args[0] as number - 1; i >= 0; i--) {
//             //     A[i] = OS.pop()
//             // }
//             // B = OS.pop() //Closure with param names
//             // C = new Frame() //Frame to extend environment with

//             // for (let i = 0; i < B[1].length; i++) {
//             //     C[B[1][i]] = A[i]
//             // }

//             //
//             // extend(C); //Extend environment
//             // PC = B[2];
//             break;
//         case Opcode.RETURN:
//             A = RTS.pop(); // return addr
//             // while (A[0] != "CALL_FRAME") {
//             //     A = RTS.pop();
//             // }
//             [PC, ENV] = A;
//             break;
//         default:
//             throw Error("unrecognised opcode " + Opcode[instr.opcode]);
//     }
// }
