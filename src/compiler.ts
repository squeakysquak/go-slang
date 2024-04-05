import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ArgumentsContext, AssignmentContext, BlockContext, ExpressionContext, FunctionDeclContext, GoParser, OperandContext, PackageClauseContext, ReturnStmtContext, StatementContext, VarSpecContext } from "./GoParser";
import { GoParserListener } from "./GoParserListener";
import { Argument, Closure, Frame, Instruction } from "./GoVirtualMachine";
import OpCodes from "./opcodes";
import { GoLexer } from "./GoLexer";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

let ENV: Frame[] = [new Frame()]

class GoCompiler implements GoParserListener {
    Instrs: Instruction[];

    //Instruction adding 
    addNullaryInstruction(opCode: string) {
        const ins: Instruction = [opCode]
        this.Instrs.push(ins)
    }

    addUnaryInstruction(opCode: string, arg1: Argument) {
        const ins: Instruction = [opCode, arg1]
        this.Instrs.push(ins)
    }

    addBinaryInstruction(opCode: string, arg1: Argument, arg2: Argument) {
        const ins: Instruction = [opCode, arg1, arg2]
        this.Instrs.push(ins)
    }

    enterPackageClause?(ctx: PackageClauseContext): void {
        console.log("package clause: " + ctx.text);
    }

    enterStatement?(ctx: StatementContext): void {
        console.log("Statement: " + ctx.text);
        this.addNullaryInstruction(OpCodes.POP);
    }

    enterFunctionDecl?: ((ctx: FunctionDeclContext) => void) | undefined = (ctx: FunctionDeclContext) => {
        let funcName = ctx.IDENTIFIER().text
        if (funcName != "main") {
            console.log("Function declaration: " + funcName);
            const paramsCtx = ctx.signature().parameters().parameterDecl();
            let params: any[] = []

            for (let i = 0; i < paramsCtx.length; i++) {
                params.push(paramsCtx[i].identifierList()?.text);
            }

            let closure: Closure = [funcName, params, this.Instrs.length + 2, ENV]; //Skip the GOTO instr
            this.addUnaryInstruction(OpCodes.LDF, closure);
        }
    }

    exitFunctionDecl?: ((ctx: FunctionDeclContext) => void) | undefined = (ctx: FunctionDeclContext) => {
        let funcName = ctx.IDENTIFIER().text
        if (funcName != "main") {
            for (let i = 0; this.Instrs.length; i++) {
                if (this.Instrs[i][0] == "LDF" && this.Instrs[i][1] != undefined) {
                    let closure: Closure = this.Instrs[i][1] as Closure
                    if (closure[0] == funcName) {
                        //Replace the ENTER_BLOCK instr with GOTO, CALL instr already extends env.
                        const ins: Instruction = [OpCodes.GOTO, this.Instrs.length]
                        this.Instrs[i + 1] = ins

                        //Assign closure to funcName
                        this.addUnaryInstruction(OpCodes.ASSIGN, funcName);

                        break
                    }
                }
            }
        }
    };

    exitReturnStmt?: ((ctx: ReturnStmtContext) => void) | undefined = (ctx: ReturnStmtContext) => {
        console.log("Exited return stmt: " + ctx.text);
        this.addNullaryInstruction(OpCodes.RESET);
    }

    enterBlock?: ((ctx: BlockContext) => void) | undefined = (ctx: BlockContext) => {
        console.log("Blocked entered");
        this.addNullaryInstruction(OpCodes.ENTER_BLOCK);
    }

    exitBlock?: ((ctx: BlockContext) => void) | undefined = (ctx: BlockContext) => {
        console.log("Block exited");
        this.addNullaryInstruction(OpCodes.EXIT_BLOCK);
    }

    exitVarSpec?: ((ctx: VarSpecContext) => void) | undefined = (ctx: VarSpecContext) => {
        let identifiers = ctx.identifierList().IDENTIFIER();
        console.log("var spec: " + ctx.text);
        for (let i = identifiers.length - 1; i >= 0; i--) {
            //console.log(identifiers[i].text);
            if (i < identifiers.length - 1) {
                this.addNullaryInstruction(OpCodes.POP);
            }
            this.addUnaryInstruction(OpCodes.ASSIGN, identifiers[i].text);
        }
    };

    enterArguments?: ((ctx: ArgumentsContext) => void) | undefined = (ctx: ArgumentsContext) => {
        // Add your code here
        //console.log("args: " + ctx.text);
    };

    exitExpression?: ((ctx: ExpressionContext) => void) | undefined = (ctx: ExpressionContext) => {
        if (ctx._unary_op != undefined) {

            console.log("unary op:", ctx.text)
            if (ctx.MINUS() != undefined) {
                console.log(ctx.MINUS()?.text);
                this.addNullaryInstruction(OpCodes.NEGATIVE);
            }
            else if (ctx.EXCLAMATION() != undefined) {
                console.log(ctx.EXCLAMATION()?.text);
                this.addNullaryInstruction(OpCodes.NOT);
            }
        } else { //Binary operations

            if (ctx.PLUS() != undefined) {
                console.log(ctx.PLUS()?.text);
                this.addNullaryInstruction(OpCodes.ADD);
            }
            else if (ctx.MINUS() != undefined) {
                console.log(ctx.MINUS()?.text);
                this.addNullaryInstruction(OpCodes.MINUS);
            }
            else if (ctx.DIV() != undefined) {
                console.log(ctx.DIV()?.text);
                this.addNullaryInstruction(OpCodes.DIV);
            }
            else if (ctx.STAR() != undefined) {
                console.log(ctx.STAR()?.text);
                this.addNullaryInstruction(OpCodes.MULT);
            }
            else if (ctx.MOD() != undefined) {
                console.log(ctx.MOD()?.text);
                this.addNullaryInstruction(OpCodes.MOD);
            }
            else if (ctx.LOGICAL_OR() != undefined) {
                console.log(ctx.LOGICAL_OR()?.text);
                this.addNullaryInstruction(OpCodes.OR);
            }
            else if (ctx.LOGICAL_AND() != undefined) {
                console.log(ctx.LOGICAL_AND()?.text);
                this.addNullaryInstruction(OpCodes.AND);
            }
            else if (ctx.EQUALS() != undefined) {
                console.log(ctx.EQUALS()?.text);
                this.addNullaryInstruction(OpCodes.EQUALS);
            }
            else if (ctx.NOT_EQUALS() != undefined) {
                console.log(ctx.NOT_EQUALS()?.text);
                this.addNullaryInstruction(OpCodes.NOT_EQUALS);
            }
            else if (ctx.LESS() != undefined) {
                console.log(ctx.LESS()?.text);
                this.addNullaryInstruction(OpCodes.LESS);
            }
            else if (ctx.LESS_OR_EQUALS() != undefined) {
                console.log(ctx.LESS_OR_EQUALS()?.text);
                this.addNullaryInstruction(OpCodes.LESS_OR_EQUALS);
            }
            else if (ctx.GREATER() != undefined) {
                console.log(ctx.GREATER()?.text);
                this.addNullaryInstruction(OpCodes.GREATER);
            }
            else if (ctx.GREATER_OR_EQUALS() != undefined) {
                console.log(ctx.GREATER_OR_EQUALS()?.text);
                this.addNullaryInstruction(OpCodes.GREATER_OR_EQUALS);
            }
        }
    };

    enterOperand?: ((ctx: OperandContext) => void) | undefined = (ctx: OperandContext) => {
        if (ctx.literal() != undefined) {
            const literal = ctx.literal(); //LiteralContext

            if (literal?.basicLit() != undefined) {
                const basicLiteral = literal.basicLit()
                if (basicLiteral?.integer() != undefined) {
                    console.log("operand (int): " + ctx.text)
                    this.addUnaryInstruction(OpCodes.LDCI, parseInt(ctx.text as string));
                }
            }
        } else if (ctx.operandName() != undefined) {
            const name = ctx.operandName();
            if (name?.text == "true" || name?.text == "false") {
                console.log("operand (bool): " + ctx.text)
                this.addUnaryInstruction(OpCodes.LDCB, ctx.text);
            } else { //variable/function name
                console.log("operand (name): " + ctx.text);
                this.addUnaryInstruction(OpCodes.LDC, ctx.text);
            }
        }
    }

    exitArguments?: ((ctx: ArgumentsContext) => void) | undefined = (ctx: ArgumentsContext) => {
        //console.log("Exited Arguments: "+ ctx.text);
        this.addUnaryInstruction(OpCodes.CALL, ctx.expressionList()?.expression().length as number)
    }

    exitAssignment?: ((ctx: AssignmentContext) => void) | undefined = (ctx: AssignmentContext) => {
        console.log("assignment: " + ctx.expressionList(0).text);
        this.addUnaryInstruction(OpCodes.REASSIGN, ctx.expressionList(0).text);
    }
}

export function compile(input: string) {
    // Create the lexer and parser
    let inputStream = CharStreams.fromString(input);
    let lexer = new GoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new GoParser(tokenStream);

    let tree = parser.sourceFile(); //Parse tree object
    console.log(tree.toStringTree(parser)); //prints tree, kind of unreadable though


    const compiler = new GoCompiler();

    ParseTreeWalker.DEFAULT.walk(compiler as GoParserListener, tree);

    compiler.addNullaryInstruction(OpCodes.DONE);

    console.log("Compiled instructions: ", compiler.Instrs);

    return compiler.Instrs
}
