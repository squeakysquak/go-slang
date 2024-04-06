import * as fs from 'fs';

import { compile } from './compiler';
import Instruction from './types/Instruction';
import Opcode from './types/Opcode';

class Frame {
    slots: [any][];
    par?: Frame;
    constructor(size: number, par?: Frame) {
        this.par = par;
        this.slots = [];
        for (let i = 0; i < size; ++i) {
            this.slots.push([undefined]);
        }
    }
    retrieve(spec: [number, number]) {
        const [depth, id] = spec;
        let fr: Frame = this;
        for (let i = 0; i < depth; ++i) {
            if (!fr.par) throw Error("frame at that depth does not exist");
            fr = fr.par;
        }
        return fr.slots[id];
    }
    assign(spec: [number, number], val: any) {
        const [depth, id] = spec;
        let fr: Frame = this;
        for (let i = 0; i < depth; ++i) {
            if (!fr.par) throw Error("frame at that depth does not exist");
            fr = fr.par;
        }
        fr.slots[id][0] = val;
    }
}

export type BlockFrame = [
    string, //tag
    number, //PC
    Frame[], //Env
]

let Instrs: Instruction[] = []
let PC = 0
let ENV: Frame = new Frame(0)
let OS: any[] = []
let RTS: [number, Frame][] = []

/**
 * when executing concurrent code
 */
// TO is timeout counter: how many instructions are left for a thread to run
let TO = 0

// some general-purpose registers
let A: any = 0
let B: any = 0
let C: any = 0
let D: any = 0
let E: any = 0
let F: any = 0
let G: any = 0
let H: any = 0
let I: any = 0
let J: any = 0
let K: any = 0

//Environment-related stuff
function pushFrame(size: number) {
    ENV = new Frame(size, ENV);
    //console.log(ENV);
}

function popFrame() {
    //console.log(ENV);
    if (!ENV.par) throw Error("no frames to pop");
    ENV = ENV.par;
}

let input = fs.readFileSync('gotests/constants.go', 'utf8');
Instrs = compile(input);


function run() {
    let i = 0;
    while (Instrs[PC].opcode != Opcode.DONE) {
        if (++i > 200) throw Error("naw mate");
        const instr = Instrs[PC++]
        console.log(instr);

        microcode(instr);
        console.log("Operand Stack: ", OS);
        console.log("Environment: ", ENV);
        console.log("RTS:", RTS);
    }
    //console.log("Final Environment: ", ENV);
    console.log("Final Operand Stack: ", OS);
    console.log("Final RTS:", RTS);
    console.log("Evaluated: " + OS.pop());
}

function microcode(instr: Instruction) {
    switch (instr.opcode) {
        case Opcode.POP:
            OS.pop();
            break;
        case Opcode.JUMP:
            PC += (instr.args[0] as number)
            break;
        case Opcode.ENTER_BLOCK:
            A = instr.args[0] as number;
            pushFrame(A);
            break;
        case Opcode.EXIT_BLOCK:
            popFrame();
            break;
        case Opcode.LDF:
            OS.push([[PC + (instr.args[0] as number), ENV]]);
            break;
        case Opcode.LDCI:
            OS.push([instr.args[0]]); // entry_point / num
            break;
        case Opcode.LDCB:
            OS.push([instr.args[0]]); // bool
            break;
        case Opcode.ADD:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B + A]); // num1 + num2
            break;
        case Opcode.SUB:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B - A]); // num1 - num2
            break;
        case Opcode.UMINUS:
            A = OS.pop()[0]; // num
            OS.push([-A]);
            break;
        case Opcode.MULT:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B * A]); // num1 * num2
            break;
        case Opcode.DIV:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B / A]); // num1 / num2 // TODO: special handling for int division?
            break;
        case Opcode.MOD:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B % A]); // num1 % num2
            break;
        case Opcode.OR:
            A = OS.pop()[0]; // bool2
            B = OS.pop()[0]; // bool1
            OS.push([B || A]); // bool1 || bool2
            break;
        case Opcode.AND:
            A = OS.pop()[0]; // bool2
            B = OS.pop()[0]; // bool1
            OS.push([B && A]); // bool1 && bool2
            break;
        case Opcode.NOT:
            A = OS.pop()[0]; // bool
            OS.push([!A]);
            break;
        case Opcode.EQUALS:
            A = OS.pop()[0]; // o2
            B = OS.pop()[0]; // o1
            OS.push([B === A]); // o1 == o2
            break;
        case Opcode.NOT_EQUALS:
            A = OS.pop()[0]; // o2
            B = OS.pop()[0]; // o1
            OS.push([B !== A]); // o1 != o2
            break;
        case Opcode.LESS:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B < A]); // num1 < num2
            break;
        case Opcode.LESS_OR_EQUALS:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B <= A]); // num1 <= num2
            break;
        case Opcode.GREATER:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B > A]); // num1 > num2
            break;
        case Opcode.GREATER_OR_EQUALS:
            A = OS.pop()[0]; // num2
            B = OS.pop()[0]; // num1
            OS.push([B >= A]); // num1 >= num2
            break;
        case Opcode.ASSIGN:
            A = instr.args[0]; // depth
            B = instr.args[1]; // idx
            C = OS.pop()[0]; // data
            ENV.assign([A, B], C);
            //console.log(ENV);
            //console.log(OS);
            break;
        case Opcode.REASSIGN:
            //console.log(PC);
            //console.log(OS);
            //console.log(ENV);
            A = OS.pop(); // value
            B = OS.pop(); // target
            B[0] = A[0];
            //console.log(OS);
            //console.log(ENV);
            break;
        case Opcode.LD:
            A = instr.args[0]; // depth
            B = instr.args[1]; // idx
            OS.push(ENV.retrieve([A, B]));
            //console.log("ENV: ", ENV);
            //console.log("OS: ", OS);
            break;
        case Opcode.CALL:
            A = OS.pop()[0]; // func
            RTS.push([PC, ENV]); // return to here
            [PC, ENV] = A;
            // A = [] //args
            // for (let i = instr.args[0] as number - 1; i >= 0; i--) {
            //     A[i] = OS.pop()
            // }
            // B = OS.pop() //Closure with param names
            // C = new Frame() //Frame to extend environment with

            // for (let i = 0; i < B[1].length; i++) {
            //     C[B[1][i]] = A[i]
            // }

            // 
            // extend(C); //Extend environment
            // PC = B[2];
            break;
        case Opcode.RETURN:
            A = RTS.pop(); // return addr
            // while (A[0] != "CALL_FRAME") {
            //     A = RTS.pop();
            // }
            [PC, ENV] = A;
            break;
        default:
            throw Error("unrecognised opcode " + Opcode[instr.opcode]);
    }
}

run();