import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AssignmentContext, BasicLitContext, BlockContext, ConstSpecContext, ExpressionContext, ExpressionStmtContext, FunctionDeclContext, GoParser, IfStmtContext, IntegerContext, OperandNameContext, ParameterDeclContext, PrimaryExprContext, ReturnStmtContext, ShortVarDeclContext, SourceFileContext, VarSpecContext } from "./GoParser";
import { GoLexer } from "./GoLexer";
import Instruction from "./types/Instruction";
import Opcode from "./types/Opcode";
import InstructionArgument from "./types/InstructionArgument";
import builtins from "./builtins";
import { GoParserVisitor } from "./GoParserVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import InstructionTree from "./types/InstructionTree";

class CompileFrame {
    symbols: Map<string, [number, boolean]>;
    numSym: number;
    par: CompileFrame | undefined;
    constructor(par?: CompileFrame) {
        this.symbols = new Map();
        this.numSym = 0;
        this.par = par;
    }
    has(sym: string) {
        return this.symbols.has(sym);
    }
    hasRec(sym: string) {
        let fr: CompileFrame | undefined = this;
        while (fr) {
            if (fr.has(sym)) return true;
            fr = fr.par;
        }
        return false;
    }
    index(sym: string) {
        if (!this.has(sym)) throw Error("index: symbol does not exist");
        return this.symbols.get(sym)?.[0] as number;
    }
    indexRec(sym: string): [number, number] {
        let fr: CompileFrame | undefined = this;
        for (let i = 0; fr; ++i) {
            if (fr.has(sym)) return [i, fr.index(sym)];
            fr = fr.par;
        }
        throw Error("indexRec: symbol does not exist");
    }
    isConst(sym: string) {
        if (!this.has(sym)) throw Error("index: symbol does not exist");
        return this.symbols.get(sym)?.[1] as boolean;
    }
    isConstRec(sym: string) {
        let fr: CompileFrame | undefined = this;
        while (fr) {
            if (fr.has(sym)) return fr.isConst(sym);
            fr = fr.par;
        }
        throw Error("isConst: symbol does not exist");
    }
    addSymbol(sym: string, is_const: boolean = false) {
        if (this.has(sym)) throw Error("addSymbol: symbol already exists");
        const new_index = this.numSym;
        this.symbols.set(sym, [new_index, is_const]);
        this.numSym += 1;
        return new_index;
    }
    addDummy() {
        const new_index = this.numSym;
        this.numSym += 1;
        return new_index;
    }
}

const builtinFrame = new CompileFrame();
for (let i = 0; i < builtins.length; ++i) {
    builtinFrame.addSymbol(builtins[i][0]);
}

const operatorInstructionMap = {
    unary: new Map([
        [GoParser.PLUS, Opcode.UPLUS],
        [GoParser.MINUS, Opcode.UMINUS],
        [GoParser.EXCLAMATION, Opcode.NOT],
        [GoParser.CARET, Opcode.BITWISE_NOT],
        [GoParser.STAR, Opcode.DEREF],
        [GoParser.AMPERSAND, Opcode.REF],
        [GoParser.RECEIVE, Opcode.RECV],
    ]),
    binary: new Map([
        [GoParser.STAR, Opcode.MULT],
        [GoParser.DIV, Opcode.DIV],
        [GoParser.MOD, Opcode.MOD],
        [GoParser.LSHIFT, Opcode.LSHIFT],
        [GoParser.RSHIFT, Opcode.RSHIFT],
        [GoParser.AMPERSAND, Opcode.BITWISE_AND],
        [GoParser.BIT_CLEAR, Opcode.BITWISE_CLEAR],
        [GoParser.PLUS, Opcode.ADD],
        [GoParser.MINUS, Opcode.SUB],
        [GoParser.OR, Opcode.BITWISE_OR],
        [GoParser.CARET, Opcode.BITWISE_XOR],
        [GoParser.EQUALS, Opcode.EQUALS],
        [GoParser.NOT_EQUALS, Opcode.NOT_EQUALS],
        [GoParser.LESS, Opcode.LESS],
        [GoParser.LESS_OR_EQUALS, Opcode.LESS_OR_EQUALS],
        [GoParser.GREATER, Opcode.GREATER],
        [GoParser.GREATER_OR_EQUALS, Opcode.GREATER_OR_EQUALS],
        [GoParser.LOGICAL_AND, Opcode.AND],
        [GoParser.LOGICAL_OR, Opcode.OR],
    ]),
};

class ParameterDeclVisitor extends AbstractParseTreeVisitor<string[]> implements GoParserVisitor<string[]> {
    visitParameterDecl?(ctx: ParameterDeclContext) {
        return ctx.identifierList()?.IDENTIFIER().map(id => id.text) ?? [""]
    }
    protected defaultResult(): string[] {
        return [];
    }
    protected aggregateResult(aggregate: string[], nextResult: string[]): string[] {
        return aggregate.concat(nextResult);
    }
}

class GoCompiler extends AbstractParseTreeVisitor<InstructionTree> implements GoParserVisitor<InstructionTree> {
    Instrs: Instruction[];
    currentFrame: CompileFrame;

    constructor() {
        super();
        this.Instrs = [];
        this.currentFrame = new CompileFrame(builtinFrame);
    }

    //// Utility functions
    enterFrame() {
        this.currentFrame = new CompileFrame(this.currentFrame);
    }
    exitFrame() {
        if (!this.currentFrame.par) throw Error("internal error: exited more blocks than entered");
        this.currentFrame = this.currentFrame.par;
    }

    ///// Declarations and assignments
    visitConstSpec?(ctx: ConstSpecContext) {
        const syms = ctx.identifierList().IDENTIFIER();
        const exprs = ctx.expressionList()?.expression();
        if (!exprs || syms.length != exprs.length) throw Error("mismatched number of init exprs");
        const res = new InstructionTree();
        for (let i = 0; i < syms.length; ++i) {
            try {
                const idx = this.currentFrame.addSymbol(syms[i].text, true);
                res.push(this.visit(exprs[i]));
                res.push(new Instruction(Opcode.ASSIGN, [0, idx]));
            } catch (e) {
                throw Error("redefining '" + syms[i].text + "'");
            }
        }
        return res;
    }
    visitVarSpec?(ctx: VarSpecContext) {
        const syms = ctx.identifierList().IDENTIFIER();
        const exprs = ctx.expressionList()?.expression();
        if (exprs && syms.length != exprs.length) throw Error("mismatched number of init exprs");
        const res = new InstructionTree();
        for (let i = 0; i < syms.length; ++i) {
            try {
                const idx = this.currentFrame.addSymbol(syms[i].text, true);
                if (exprs) {
                    res.push(this.visit(exprs[i]));
                    res.push(new Instruction(Opcode.ASSIGN, [0, idx]));
                }
            } catch (e) {
                throw Error("redefining '" + syms[i].text + "'");
            }
        }
        return res;
    }
    visitShortVarDecl?(ctx: ShortVarDeclContext) {
        const syms = ctx.identifierList().IDENTIFIER();
        const exprs = ctx.expressionList()?.expression();
        if (!exprs || syms.length != exprs.length) throw Error("mismatched number of init exprs");
        const res = new InstructionTree();
        for (let i = 0; i < syms.length; ++i) {
            try {
                const idx = this.currentFrame.addSymbol(syms[i].text, true);
                res.push(this.visit(exprs[i]));
                res.push(new Instruction(Opcode.ASSIGN, [0, idx]));
            } catch (e) {
                throw Error("redefining '" + syms[i].text + "'");
            }
        }
        return res;
    }
    visitFunctionDecl?(ctx: FunctionDeclContext) {
        const sym = ctx.IDENTIFIER().text;
        let func_idx;
        try {
            func_idx = this.currentFrame.addSymbol(sym, true);
        } catch (e) {
            throw Error("redefining '" + sym + "'");
        }
        const block = ctx.block();
        if (!block) throw Error("");
        const res = new InstructionTree();
        this.enterFrame();
        const enterBlockInstr = new Instruction(Opcode.ENTER_BLOCK);
        res.push(enterBlockInstr)
        const params = (new ParameterDeclVisitor()).visit(ctx.signature().parameters());
        for (let i = params.length - 1; i >= 0; --i) {
            let idx;
            if (params[i]) {
                try {
                    idx = this.currentFrame.addSymbol(params[i]);
                } catch (e) {
                    throw Error("redefining '" + params[i] + "'");
                }
            } else {
                idx = this.currentFrame.addDummy();
            }
            res.push(new Instruction(Opcode.ASSIGN, [0, idx]));
        }
        res.push(this.visitChildren(block));
        const frameSize = this.currentFrame.numSym;
        enterBlockInstr.args.push(frameSize);
        res.push(new Instruction(Opcode.RETURN)); // if function hasn't returned yet, it should return now
        res.push(new Instruction(Opcode.EXIT_BLOCK));
        this.exitFrame(); // parameter frame
        return new InstructionTree([
            new Instruction(Opcode.JUMP, [res.size]),
            res,
            new Instruction(Opcode.LDF, [-(res.size + 1)]),
            new Instruction(Opcode.ASSIGN, [0, func_idx])
        ]);
    }
    visitAssignment?(ctx: AssignmentContext) {
        const assignTargets = ctx.expressionList(0).expression();
        const assignOp = ctx.assign_op().start.type;
        const assignValues = ctx.expressionList(1).expression();
        if (assignTargets.length !== assignValues.length) throw Error("mismatched number of assignment exprs");
        const res = new InstructionTree();
        for (let i = 0; i < assignTargets.length; ++i) {
            res.push(this.visit(assignTargets[i]));
            res.push(this.visit(assignValues[i]));
            res.push(new Instruction(Opcode.REASSIGN));
        }
        return res;
    }
    visitBlock?(ctx: BlockContext) {
        this.enterFrame();
        const res = this.visitChildren(ctx);
        const frameSize = this.currentFrame.numSym;
        this.exitFrame();
        return new InstructionTree([
            new Instruction(Opcode.ENTER_BLOCK, [frameSize]),
            res,
            new Instruction(Opcode.EXIT_BLOCK)
        ]);
    }

    ///// Expressions
    visitExpression?(ctx: ExpressionContext) {
        const res = this.visitChildren(ctx);
        if (ctx.primaryExpr()) {
            return res; // don't bother it
        }
        if (ctx._unary_op) {
            const operator = ctx._unary_op.type;
            if (!operatorInstructionMap.unary.has(operator)) throw Error("unknown unary operator '" + ctx._unary_op.text + "'");
            res.push(new Instruction(operatorInstructionMap.unary.get(operator) as Opcode));
            return res;
        } else { //Binary operations
            const op = (ctx._mul_op ?? ctx._add_op ?? ctx._rel_op ?? ctx.LOGICAL_AND()?.symbol ?? ctx.LOGICAL_OR()?.symbol);
            if (!op) throw Error("unknown operator, expr: " + ctx.text);
            const operator = op.type;
            if (!operatorInstructionMap.binary.has(operator)) throw Error("unknown binary operator '" + op.text + "' (type: " + op.type + ")");
            res.push(new Instruction(operatorInstructionMap.binary.get(operator) as Opcode));
            return res;
        }
    };
    visitExpressionStmt?(ctx: ExpressionStmtContext) {
        const res = this.visitChildren(ctx);
        res.push(new Instruction(Opcode.POP));
        return res;
    }
    visitBasicLit?(ctx: BasicLitContext) {
        if (ctx.NIL_LIT()) {
            return new InstructionTree([
                new Instruction(Opcode.LDN)
            ]);
        } else if (ctx.FLOAT_LIT()) {
            const lit = ctx.FLOAT_LIT()?.text as string;
            return new InstructionTree([
                new Instruction(Opcode.LDCF, [parseFloat(lit)])
            ]);
        } else if (ctx.string_()) {
            throw Error("strings not implemented");
        }
        // else: handled by exitInteger
        return this.visitChildren(ctx);
    }
    visitInteger?(ctx: IntegerContext) {
        if (ctx.DECIMAL_LIT()) {
            return new InstructionTree([
                new Instruction(Opcode.LDCI, [parseInt(ctx.DECIMAL_LIT()?.text as string)])
            ]);
        } else {
            throw Error("use decimal integers");
        }
    }
    visitOperandName?(ctx: OperandNameContext) {
        this.visitChildren(ctx);
        const sym = ctx.IDENTIFIER().text;
        if (sym === "true" || sym === "false") {
            return new InstructionTree([
                new Instruction(Opcode.LDCB, [sym === "true"])
            ]);
        }
        if (!this.currentFrame.hasRec(sym)) throw Error("unknown symbol '" + sym + "'");
        return new InstructionTree([
            new Instruction(Opcode.LD, this.currentFrame.indexRec(sym))
        ]);
    }

    ///// Control Flow
    visitReturnStmt?(ctx: ReturnStmtContext) {
        const res = this.visitChildren(ctx);
        res.push(new Instruction(Opcode.RETURN));
        return res;
    }
    visitPrimaryExpr?(ctx: PrimaryExprContext) {
        const args = ctx.arguments();
        if (args) {
            const loadedArgs = this.visit(args);
            const loadedFunc = this.visit(ctx.primaryExpr() as PrimaryExprContext);
            const numArgs = args.expressionList()?.expression().length ?? 0;
            return new InstructionTree([
                loadedArgs,
                loadedFunc,
                new Instruction(Opcode.CALL, [numArgs])
            ]);
        }
        return this.visitChildren(ctx);
    }

    ///// Conditionals
    visitIfStmt?(ctx: IfStmtContext){
        //console.log("COMPILING IF STMT")
        const res = new InstructionTree();
        res.push(this.visit(ctx.expression() as ExpressionContext))

        //console.log("BLOCKS: ", ctx.block().length);
        let block = this.visit(ctx.block(0))
        let offset = block.size + 1;
        res.push(new Instruction(Opcode.JOF, [offset]))

        //If part
        res.push(block)
        const jump_instr = new Instruction(Opcode.JUMP);
        res.push(jump_instr);
        let len = res.size

        //else if part (optional)
        if (ctx.ifStmt()){
            res.push(this.visit(ctx.ifStmt() as IfStmtContext));
        }

        //else part (optional)
        if (ctx.block().length == 2){
           res.push(this.visitChildren(ctx.block(1)))
        }

        jump_instr.args[0] = res.size - len;
        
        return res;
    }

    ///// Program wrapper
    visitSourceFile?(ctx: SourceFileContext) {
        const prog = this.visitChildren(ctx);
        if (!this.currentFrame.has("main")) throw Error("main not found");
        return new InstructionTree([
            new Instruction(Opcode.ENTER_BLOCK, [this.currentFrame.numSym]),
            prog,
            new Instruction(Opcode.LD, this.currentFrame.indexRec("main")),
            new Instruction(Opcode.CALL),
            new Instruction(Opcode.EXIT_BLOCK),
            new Instruction(Opcode.DONE)
        ]);
    }

    protected defaultResult(): InstructionTree {
        return new InstructionTree();
    }
    protected aggregateResult(aggregate: InstructionTree, nextResult: InstructionTree): InstructionTree {
        aggregate.push(nextResult);
        return aggregate;
    }
}

export function compile(input: string) {
    // Create the lexer and parser
    let inputStream = CharStreams.fromString(input);
    let lexer = new GoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new GoParser(tokenStream);

    let tree = parser.sourceFile(); //Parse tree object
    // console.log(tree.toStringTree(parser)); //prints tree, kind of unreadable though

    const compiler = new GoCompiler();

    compiler.Instrs = compiler.visit(tree).flatten();


    console.log("Compiled instructions:");
    for (let i = 0; i < compiler.Instrs.length; ++i) {
        console.log(i.toString().padStart(3), Opcode[compiler.Instrs[i].opcode].padStart(20), compiler.Instrs[i].args.join(" "));
    }

    return compiler.Instrs
}
