import * as fs from 'fs';

import { compile } from './compiler';
import { Instruction } from './types/Instruction';
import { Opcode } from './types/Opcode';

export class Frame {
    [Key: string]: number | boolean | Closure;
}

export type BlockFrame = [
    string, //tag
    number, //PC
    Frame[], //Env
]

let Instrs: Instruction[] = []
let PC = 0
export let ENV: Frame[] = [new Frame()]
let OS: any[] = []
let RTS: BlockFrame[] = []

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

export type Offset = number // instructions to skip
export type Address = [
    number, // function index
    number? // instruction index within function; optional
]
export type Argument = number | boolean | string | Offset | Address | Closure
export type Closure = [
    string, //tag
    string[], //params
    number, //PC
    Frame[] //Environment
]
export type GoVMFunction = [
    number, // stack size
    number, // environment size
    number, // number of arguments
    Instruction[] // code
]
export type Program = [
    number, // index of entry point function
    GoVMFunction[]
]

//Environment-related stuff
function pushFrame() {
    ENV.push(new Frame());
    //console.log(ENV);
}

function extend(newFrame: Frame) {
    ENV.push(newFrame);
}

function popFrame() {
    //console.log(ENV);
    ENV.pop();
}

function addMappingToCurrentFrame(identifier: string, value: number | boolean | Closure) {
    ENV[ENV.length - 1][identifier] = value;
}

function lookupIdentifier(identifier: string) {
    //console.log("lookup for " + identifier);
    for (let i = ENV.length - 1; i >= 0; i--) {
        let currentFrame: Frame = ENV[i];
        if (currentFrame[identifier] != undefined) {
            //console.log("FOUND: " + currentFrame[identifier]);
            return currentFrame[identifier];
        }
    }
    return undefined;
}


let input = fs.readFileSync('gotests/constants.go', 'utf8');
Instrs = compile(input);


function run() {
    while (Instrs[PC].opcode != Opcode.DONE) {
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
        case Opcode.GOTO:
            PC = (instr.args[0] as number)
            break;
        case Opcode.ENTER_BLOCK:
            pushFrame();
            break;
        case Opcode.EXIT_BLOCK:
            popFrame();
            break;
        case Opcode.LDF:
        case Opcode.LDCI:
            OS.push(instr.args[0]);
            break;
        case Opcode.LDCB:
            OS.push(instr.args[0] == "true" ? true :
                instr.args[0] == "false" ? false :
                    undefined);
            break;
        case Opcode.LDF:
            break;
        case Opcode.ADD:
            A = OS.pop();
            B = OS.pop();
            OS.push(B + A);
            break;
        case Opcode.MINUS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B - A);
            break;
        case Opcode.NEGATIVE:
            A = OS.pop();
            OS.push(-A);
            break;
        case Opcode.MULT:
            A = OS.pop();
            B = OS.pop();
            OS.push(B * A);
            break;
        case Opcode.DIV:
            A = OS.pop();
            B = OS.pop();
            OS.push(B / A);
            break;
        case Opcode.MOD:
            A = OS.pop();
            B = OS.pop();
            OS.push(B % A);
            break;
        case Opcode.OR:
            A = OS.pop();
            B = OS.pop();
            OS.push(B || A);
            break;
        case Opcode.AND:
            A = OS.pop();
            B = OS.pop();
            OS.push(B && A);
            break;
        case Opcode.NOT:
            A = OS.pop();
            OS.push(!A);
            break;
        case Opcode.EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B == A);
            break;
        case Opcode.NOT_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B != A);
            break;
        case Opcode.LESS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B < A);
            break;
        case Opcode.LESS_OR_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B <= A);
            break;
        case Opcode.GREATER:
            A = OS.pop();
            B = OS.pop();
            OS.push(B > A);
            break;
        case Opcode.GREATER_OR_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B >= A);
            break;
        case Opcode.ASSIGN:
            A = instr.args[0] as string;
            B = OS[OS.length - 1];
            addMappingToCurrentFrame(A, B);
            //console.log(ENV);
            //console.log(OS);
            break;
        case Opcode.REASSIGN:
            //console.log(PC);
            //console.log(OS);
            //console.log(ENV);
            A = OS[OS.length - 1];
            B = instr.args[0];
            OS.pop();
            OS.pop();
            OS.push(A);
            addMappingToCurrentFrame(B, A);
            //console.log(OS);
            //console.log(ENV);
            break;
        case Opcode.LDC:
            A = instr.args[0] as string;
            OS.push(lookupIdentifier(A));
            //console.log("ENV: ", ENV);
            //console.log("OS: ", OS);
            break;
        case Opcode.CALL:
            A = [] //args
            for (let i = instr.args[0] as number - 1; i >= 0; i--) {
                A[i] = OS.pop()
            }
            B = OS.pop() //Closure with param names
            C = new Frame() //Frame to extend environment with

            for (let i = 0; i < B[1].length; i++) {
                C[B[1][i]] = A[i]
            }

            RTS.push(["CALL_FRAME", PC, ENV])
            extend(C); //Extend environment
            PC = B[2];
            break;
        case Opcode.RESET:
            A = RTS.pop();
            while (A[0] != "CALL_FRAME") {
                A = RTS.pop();
            }
            PC = A[1];
            ENV = A[2];
            break;
    }
}

run();