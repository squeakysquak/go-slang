import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {GoLexer} from './GoLexer';
import {GoParser} from './GoParser';
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

let Instrs: Instruction[] = []
let PC = 0
let ENV = {}
let OS: any[] = []
let RTS: any[] = []

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
export type Argument = number | boolean | string | Offset | Address
export type Instruction = [
    number, // opcode
    Argument?,
    Argument?
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

function addNullaryInstruction(opCode: number) {
    const ins: Instruction = [opCode]
    Instrs.push(ins)
  }
  
  function addUnaryInstruction(opCode: number, arg1: Argument) {
    const ins: Instruction = [opCode, arg1]
    Instrs.push(ins)
  }
  
  function addBinaryInstruction(opCode: number, arg1: Argument, arg2: Argument) {
    const ins: Instruction = [opCode, arg1, arg2]
    Instrs.push(ins)
  }
  

// Create the lexer and parser
let input = fs.readFileSync('tests/constants.go','utf8');
let inputStream = new ANTLRInputStream(input); //test input, need to somehow link this to use SourceAcademy instead
let lexer = new GoLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new GoParser(tokenStream);

let tree = parser.sourceFile(); //Parse tree object

class GoCompiler implements GoParserListener{
    enterPackageClause? (ctx: PackageClauseContext): void{
        console.log("package clause: " + ctx.text);
    }

    enterStatement? (ctx: StatementContext): void {
        console.log("Statement: " + ctx.text);
    }

    enterShortVarDecl?: ((ctx: ShortVarDeclContext) => void) | undefined = (ctx: ShortVarDeclContext) => {
        console.log("short var decl: " + ctx.text);
    }

    enterArguments?: ((ctx: ArgumentsContext) => void) | undefined = (ctx: ArgumentsContext) => {
        // Add your code here
        //console.log("args: " + ctx.text);
    };

    exitExpression?: ((ctx: ExpressionContext) => void) | undefined =  (ctx: ExpressionContext) => {
        // Add your code here
        if (ctx.PLUS() != undefined){
            console.log(ctx.PLUS()?.text);
            addNullaryInstruction(OpCodes.ADDG);
        }
    };

    enterOperand?: ((ctx: OperandContext) => void) | undefined = (ctx: OperandContext) => {
        console.log("operand: " + ctx.text)

        if (ctx.literal() != undefined){
            const literal = ctx.literal(); //LiteralContext

            if (literal?.basicLit() != undefined){
                const basicLiteral = literal.basicLit()

                if(basicLiteral?.integer() != undefined){
                    //console.log("hi");
                    addUnaryInstruction(OpCodes.LDCI, parseInt(ctx.text as string));
                }
            }
        }
    }
}

const compiler: GoParserListener = new GoCompiler();

ParseTreeWalker.DEFAULT.walk(compiler,tree);

console.log(Instrs);

addNullaryInstruction(OpCodes.DONE);

function run(){
    while(Instrs[PC][0] != OpCodes.DONE){
        const instr = Instrs[PC++]
        microcode(instr);
    }
    console.log("evaluated: " + OS.pop());
}

function microcode(instr: Instruction){
    switch (instr[0]){
        case OpCodes.LDCI:
            OS.push(instr[1])
            break;
        case OpCodes.ADDG:
            let op1 = OS.pop();
            let op2 = OS.pop();
            OS.push(op1 + op2);
            break;
    }
}

run();