import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { GoLexer } from './GoLexer';
import { GoParser } from './GoParser';
import { GoParserListener } from './GoParserListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import { SourceFileContext } from "./GoParser";
import { PackageClauseContext } from "./GoParser";
import { ImportDeclContext } from "./GoParser";
import { ImportSpecContext } from "./GoParser";
import { ImportPathContext } from "./GoParser";
import { DeclarationContext } from "./GoParser";
import { ConstDeclContext } from "./GoParser";
import { ConstSpecContext } from "./GoParser";
import { IdentifierListContext } from "./GoParser";
import { ExpressionListContext } from "./GoParser";
import { TypeDeclContext } from "./GoParser";
import { TypeSpecContext } from "./GoParser";
import { AliasDeclContext } from "./GoParser";
import { TypeDefContext } from "./GoParser";
import { TypeParametersContext } from "./GoParser";
import { TypeParameterDeclContext } from "./GoParser";
import { TypeElementContext } from "./GoParser";
import { TypeTermContext } from "./GoParser";
import { FunctionDeclContext } from "./GoParser";
import { MethodDeclContext } from "./GoParser";
import { ReceiverContext } from "./GoParser";
import { VarDeclContext } from "./GoParser";
import { VarSpecContext } from "./GoParser";
import { BlockContext } from "./GoParser";
import { StatementListContext } from "./GoParser";
import { StatementContext } from "./GoParser";
import { SimpleStmtContext } from "./GoParser";
import { ExpressionStmtContext } from "./GoParser";
import { SendStmtContext } from "./GoParser";
import { IncDecStmtContext } from "./GoParser";
import { AssignmentContext } from "./GoParser";
import { Assign_opContext } from "./GoParser";
import { ShortVarDeclContext } from "./GoParser";
import { LabeledStmtContext } from "./GoParser";
import { ReturnStmtContext } from "./GoParser";
import { BreakStmtContext } from "./GoParser";
import { ContinueStmtContext } from "./GoParser";
import { GotoStmtContext } from "./GoParser";
import { FallthroughStmtContext } from "./GoParser";
import { DeferStmtContext } from "./GoParser";
import { IfStmtContext } from "./GoParser";
import { SwitchStmtContext } from "./GoParser";
import { ExprSwitchStmtContext } from "./GoParser";
import { ExprCaseClauseContext } from "./GoParser";
import { ExprSwitchCaseContext } from "./GoParser";
import { TypeSwitchStmtContext } from "./GoParser";
import { TypeSwitchGuardContext } from "./GoParser";
import { TypeCaseClauseContext } from "./GoParser";
import { TypeSwitchCaseContext } from "./GoParser";
import { TypeListContext } from "./GoParser";
import { SelectStmtContext } from "./GoParser";
import { CommClauseContext } from "./GoParser";
import { CommCaseContext } from "./GoParser";
import { RecvStmtContext } from "./GoParser";
import { ForStmtContext } from "./GoParser";
import { ForClauseContext } from "./GoParser";
import { RangeClauseContext } from "./GoParser";
import { GoStmtContext } from "./GoParser";
import { Type_Context } from "./GoParser";
import { TypeArgsContext } from "./GoParser";
import { TypeNameContext } from "./GoParser";
import { TypeLitContext } from "./GoParser";
import { ArrayTypeContext } from "./GoParser";
import { ArrayLengthContext } from "./GoParser";
import { ElementTypeContext } from "./GoParser";
import { PointerTypeContext } from "./GoParser";
import { InterfaceTypeContext } from "./GoParser";
import { SliceTypeContext } from "./GoParser";
import { MapTypeContext } from "./GoParser";
import { ChannelTypeContext } from "./GoParser";
import { MethodSpecContext } from "./GoParser";
import { FunctionTypeContext } from "./GoParser";
import { SignatureContext } from "./GoParser";
import { ResultContext } from "./GoParser";
import { ParametersContext } from "./GoParser";
import { ParameterDeclContext } from "./GoParser";
import { ExpressionContext } from "./GoParser";
import { PrimaryExprContext } from "./GoParser";
import { ConversionContext } from "./GoParser";
import { OperandContext } from "./GoParser";
import { LiteralContext } from "./GoParser";
import { BasicLitContext } from "./GoParser";
import { IntegerContext } from "./GoParser";
import { OperandNameContext } from "./GoParser";
import { QualifiedIdentContext } from "./GoParser";
import { CompositeLitContext } from "./GoParser";
import { LiteralTypeContext } from "./GoParser";
import { LiteralValueContext } from "./GoParser";
import { ElementListContext } from "./GoParser";
import { KeyedElementContext } from "./GoParser";
import { KeyContext } from "./GoParser";
import { ElementContext } from "./GoParser";
import { StructTypeContext } from "./GoParser";
import { FieldDeclContext } from "./GoParser";
import { String_Context } from "./GoParser";
import { EmbeddedFieldContext } from "./GoParser";
import { FunctionLitContext } from "./GoParser";
import { IndexContext } from "./GoParser";
import { Slice_Context } from "./GoParser";
import { TypeAssertionContext } from "./GoParser";
import { ArgumentsContext } from "./GoParser";
import { MethodExprContext } from "./GoParser";
import { EosContext } from "./GoParser";

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