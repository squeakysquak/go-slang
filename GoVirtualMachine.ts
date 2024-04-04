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

class Frame {
    [Key: string]: number | boolean;
}

let Instrs: Instruction [] = []
let PC = 0
let ENV: Frame[] = []
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
    string, // opcode
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

//Instruction adding 
function addNullaryInstruction(opCode: string) {
    const ins: Instruction = [opCode]
    Instrs.push(ins)
  }
  
  function addUnaryInstruction(opCode: string, arg1: Argument) {
    const ins: Instruction = [opCode, arg1]
    Instrs.push(ins)
  }
  
  function addBinaryInstruction(opCode: string, arg1: Argument, arg2: Argument) {
    const ins: Instruction = [opCode, arg1, arg2]
    Instrs.push(ins)
  }
  
//Environment-related stuff
function pushFrame(){
    ENV.push(new Frame());
    //console.log(ENV);
}

function popFrame(){
    //console.log(ENV);
    ENV.pop();
}

function addMappingToCurrentFrame(identifier: string, value: number | boolean){
    ENV[ENV.length-1][identifier] = value;
}

function lookupIdentifier(identifier: string){
    //console.log("lookup for " + identifier);
    for(let i = ENV.length - 1; i >= 0; i--){
        let currentFrame : Frame = ENV[i];
        if (currentFrame[identifier] != undefined) {
            //console.log("FOUND: " + currentFrame[identifier]);
            return currentFrame[identifier];
        }
    }
    return undefined;
}

// Create the lexer and parser
let input = fs.readFileSync('tests/constants.go','utf8');
let inputStream = new ANTLRInputStream(input); //test input, need to somehow link this to use SourceAcademy instead
let lexer = new GoLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new GoParser(tokenStream);

let tree = parser.sourceFile(); //Parse tree object
console.log(tree.toStringTree(parser)); //prints tree, kind of unreadable though

class GoCompiler implements GoParserListener{
    enterPackageClause? (ctx: PackageClauseContext): void{
        console.log("package clause: " + ctx.text);
    }

    enterStatement? (ctx: StatementContext): void {
        console.log("Statement: " + ctx.text);
        addNullaryInstruction(OpCodes.POP);
    }

    enterBlock?: ((ctx: BlockContext) => void) | undefined = (ctx: BlockContext) =>{
        console.log("Blocked entered");
        addNullaryInstruction(OpCodes.ENTER_BLOCK);
    }

    exitBlock?: ((ctx: BlockContext) => void) | undefined = (ctx: BlockContext)=>{
        console.log("Block exited");
        addNullaryInstruction(OpCodes.EXIT_BLOCK);
    }

    exitVarSpec?: ((ctx: VarSpecContext) => void) | undefined = (ctx:VarSpecContext) =>{
        let identifiers = ctx.identifierList().IDENTIFIER();
        console.log("var spec: " + ctx.text);
        for(let i = identifiers.length - 1 ; i >= 0; i--){
            //console.log(identifiers[i].text);
            if (i < identifiers.length - 1){
                addNullaryInstruction(OpCodes.POP);
            }
            addUnaryInstruction(OpCodes.ASSIGN, identifiers[i].text);
        }
    };

    enterArguments?: ((ctx: ArgumentsContext) => void) | undefined = (ctx: ArgumentsContext) => {
        // Add your code here
        //console.log("args: " + ctx.text);
    };

    exitExpression?: ((ctx: ExpressionContext) => void) | undefined =  (ctx: ExpressionContext) => {
        if (ctx._unary_op != undefined){

            console.log("unary op:", ctx.text)
            if (ctx.MINUS() != undefined){
                console.log(ctx.MINUS()?.text);
                addNullaryInstruction(OpCodes.NEGATIVE);
            }
            else if (ctx.EXCLAMATION() != undefined){
                console.log(ctx.EXCLAMATION()?.text);
                addNullaryInstruction(OpCodes.NOT);
            }
        }else{ //Binary operations

            if (ctx.PLUS() != undefined){
                console.log(ctx.PLUS()?.text);
                addNullaryInstruction(OpCodes.ADD);
            }
            else if (ctx.MINUS() != undefined){
                console.log(ctx.MINUS()?.text);
                addNullaryInstruction(OpCodes.MINUS);
            }
            else if (ctx.DIV() != undefined){
                console.log(ctx.DIV()?.text);
                addNullaryInstruction(OpCodes.DIV);
            }
            else if (ctx.STAR() != undefined){
                console.log(ctx.STAR()?.text);
                addNullaryInstruction(OpCodes.MULT);
            }
            else if (ctx.MOD() != undefined){
                console.log(ctx.MOD()?.text);
                addNullaryInstruction(OpCodes.MOD);
            }
            else if (ctx.LOGICAL_OR() != undefined){
                console.log(ctx.LOGICAL_OR()?.text);
                addNullaryInstruction(OpCodes.OR);
            }
            else if (ctx.LOGICAL_AND() != undefined){
                console.log(ctx.LOGICAL_AND()?.text);
                addNullaryInstruction(OpCodes.AND);
            }
            else if (ctx.EQUALS() != undefined){
                console.log(ctx.EQUALS()?.text);
                addNullaryInstruction(OpCodes.EQUALS);
            }
            else if (ctx.NOT_EQUALS() != undefined){
                console.log(ctx.NOT_EQUALS()?.text);
                addNullaryInstruction(OpCodes.NOT_EQUALS);
            }
            else if (ctx.LESS() != undefined){
                console.log(ctx.LESS()?.text);
                addNullaryInstruction(OpCodes.LESS);
            }
            else if (ctx.LESS_OR_EQUALS() != undefined){
                console.log(ctx.LESS_OR_EQUALS()?.text);
                addNullaryInstruction(OpCodes.LESS_OR_EQUALS);
            }
            else if (ctx.GREATER() != undefined){
                console.log(ctx.GREATER()?.text);
                addNullaryInstruction(OpCodes.GREATER);
            }
            else if (ctx.GREATER_OR_EQUALS() != undefined){
                console.log(ctx.GREATER_OR_EQUALS()?.text);
                addNullaryInstruction(OpCodes.GREATER_OR_EQUALS);
            }
        }
    };

    enterOperand?: ((ctx: OperandContext) => void) | undefined = (ctx: OperandContext) => {
        if (ctx.literal() != undefined){
            const literal = ctx.literal(); //LiteralContext

            if (literal?.basicLit() != undefined){
                const basicLiteral = literal.basicLit()
                if(basicLiteral?.integer() != undefined){
                    console.log("operand (int): " + ctx.text)
                    addUnaryInstruction(OpCodes.LDCI, parseInt(ctx.text as string));
                }
            }
        }else if (ctx.operandName() != undefined){
            const name = ctx.operandName();
            if (name?.text == "true" || name?.text == "false"){
                console.log("operand (bool): " + ctx.text)
                addUnaryInstruction(OpCodes.LDCB, ctx.text);
            }else{ //variable/function name
                console.log("operand (name): "+ ctx.text);
                addUnaryInstruction(OpCodes.LDC, ctx.text);
            }
        }
    }

    exitAssignment?: ((ctx: AssignmentContext) => void) | undefined = (ctx: AssignmentContext) => {
        console.log("assignment: " + ctx.expressionList(0).text);
        addUnaryInstruction(OpCodes.REASSIGN, ctx.expressionList(0).text);
    }
}

const compiler: GoParserListener = new GoCompiler();

ParseTreeWalker.DEFAULT.walk(compiler,tree);

addNullaryInstruction(OpCodes.DONE);

console.log("Compiled instructions: ", Instrs);

function run(){
    while(Instrs[PC][0] != OpCodes.DONE){
        const instr = Instrs[PC++]
        microcode(instr);
        console.log(instr);
        //console.log("Operand Stack: ", OS);
        console.log("Environment: ", ENV);
    }
    //console.log("Final Environment: ", ENV);
    console.log("Final Operand Stack: ", OS);
    console.log("Evaluated: " + OS.pop());
}

function microcode(instr: Instruction){
    switch (instr[0]){
        case OpCodes.POP:
            OS.pop();
            break;
        case OpCodes.ENTER_BLOCK:
            pushFrame();
            break;
        case OpCodes.EXIT_BLOCK:
            popFrame();
            break;
        case OpCodes.LDCI:
            OS.push(instr[1]);
            break;
        case OpCodes.LDCB:
            OS.push(instr[1] == "true" ? true : 
                instr[1] == "false" ? false : 
                undefined);
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
            OS.push (B || A);
            break;
        case OpCodes.AND:
            A = OS.pop();
            B = OS.pop();
            OS.push (B && A);
            break;
        case OpCodes.NOT:
            A = OS.pop();
            OS.push (!A);
            break;
        case OpCodes.EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B==A);
            break;
        case OpCodes.NOT_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B!=A);
            break;
        case OpCodes.LESS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B<A);
            break;
        case OpCodes.LESS_OR_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B<=A);
            break;
        case OpCodes.GREATER:
            A = OS.pop();
            B = OS.pop();
            OS.push(B>A);
            break;
        case OpCodes.GREATER_OR_EQUALS:
            A = OS.pop();
            B = OS.pop();
            OS.push(B>=A);
            break;
        case OpCodes.ASSIGN:
            A = instr[1] as string;
            B = OS[OS.length-1];
            addMappingToCurrentFrame(A, B);
            //console.log(ENV);
            //console.log(OS);
            break;
        case OpCodes.REASSIGN:
            //console.log(PC);
            //console.log(OS);
            //console.log(ENV);
            A = OS[OS.length-1];
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
    }
}

run();