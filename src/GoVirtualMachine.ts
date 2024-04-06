import * as fs from 'fs';

import OpCodes from './opcodes'
import { compile } from './compiler';

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
export type Instruction = [
    string, // opcode
    Argument?,
    Argument?
]
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
    while (Instrs[PC][0] != OpCodes.DONE) {
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
    switch (instr[0]) {
        case OpCodes.POP:
            OS.pop();
            break;
        case OpCodes.GOTO:
            PC = (instr[1] as number)
            break;
        case OpCodes.ENTER_BLOCK:
            pushFrame();
            break;
        case OpCodes.EXIT_BLOCK:
            popFrame();
            break;
        case OpCodes.LDF:
        case OpCodes.LDCI:
            OS.push(instr[1]);
            break;
        case OpCodes.LDCB:
            OS.push(instr[1] == "true" ? true :
                instr[1] == "false" ? false :
                    undefined);
            break;
        case OpCodes.LDF:
            break;
        case OpCodes.ADD:
            A = OS.pop();
            B = OS.pop();
            OS.push(B + A);
            break;
        case OpCodes.MINUS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B - A);
            break;
        case OpCodes.NEGATIVE:
            A = OS.pop();
            OS.push(-A);
            break;
        case OpCodes.MULT:
            A = OS.pop();
            B = OS.pop();
            OS.push(B * A);
            break;
        case OpCodes.DIV:
            A = OS.pop();
            B = OS.pop();
            OS.push(B / A);
            break;
        case OpCodes.MOD:
            A = OS.pop();
            B = OS.pop();
            OS.push(B % A);
            break;
        case OpCodes.OR:
            A = OS.pop();
            B = OS.pop();
            OS.push(B || A);
            break;
        case OpCodes.AND:
            A = OS.pop();
            B = OS.pop();
            OS.push(B && A);
            break;
        case OpCodes.NOT:
            A = OS.pop();
            OS.push(!A);
            break;
        case OpCodes.EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B == A);
            break;
        case OpCodes.NOT_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B != A);
            break;
        case OpCodes.LESS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B < A);
            break;
        case OpCodes.LESS_OR_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B <= A);
            break;
        case OpCodes.GREATER:
            A = OS.pop();
            B = OS.pop();
            OS.push(B > A);
            break;
        case OpCodes.GREATER_OR_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B >= A);
            break;
        case OpCodes.ASSIGN:
            A = instr[1] as string;
            B = OS[OS.length - 1];
            addMappingToCurrentFrame(A, B);
            //console.log(ENV);
            //console.log(OS);
            break;
        case OpCodes.REASSIGN:
            //console.log(PC);
            //console.log(OS);
            //console.log(ENV);
            A = OS[OS.length - 1];
            B = instr[1];
            OS.pop();
            OS.pop();
            OS.push(A);
            addMappingToCurrentFrame(B, A);
            //console.log(OS);
            //console.log(ENV);
            break;
        case OpCodes.LDC:
            A = instr[1] as string;
            OS.push(lookupIdentifier(A));
            //console.log("ENV: ", ENV);
            //console.log("OS: ", OS);
            break;
        case OpCodes.CALL:
            A = [] //args
            for (let i = instr[1] as number - 1; i >= 0; i--) {
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
        case OpCodes.RESET:
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