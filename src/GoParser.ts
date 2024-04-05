// Generated from GoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GoParserListener } from "./GoParserListener";
import { GoParserVisitor } from "./GoParserVisitor";
import {GoParserBase} from "./GoParserBase";


export class GoParser extends GoParserBase {
	public static readonly BREAK = 1;
	public static readonly DEFAULT = 2;
	public static readonly FUNC = 3;
	public static readonly INTERFACE = 4;
	public static readonly SELECT = 5;
	public static readonly CASE = 6;
	public static readonly DEFER = 7;
	public static readonly GO = 8;
	public static readonly MAP = 9;
	public static readonly STRUCT = 10;
	public static readonly CHAN = 11;
	public static readonly ELSE = 12;
	public static readonly GOTO = 13;
	public static readonly PACKAGE = 14;
	public static readonly SWITCH = 15;
	public static readonly CONST = 16;
	public static readonly FALLTHROUGH = 17;
	public static readonly IF = 18;
	public static readonly RANGE = 19;
	public static readonly TYPE = 20;
	public static readonly CONTINUE = 21;
	public static readonly FOR = 22;
	public static readonly IMPORT = 23;
	public static readonly RETURN = 24;
	public static readonly VAR = 25;
	public static readonly NIL_LIT = 26;
	public static readonly IDENTIFIER = 27;
	public static readonly L_PAREN = 28;
	public static readonly R_PAREN = 29;
	public static readonly L_CURLY = 30;
	public static readonly R_CURLY = 31;
	public static readonly L_BRACKET = 32;
	public static readonly R_BRACKET = 33;
	public static readonly ASSIGN = 34;
	public static readonly COMMA = 35;
	public static readonly SEMI = 36;
	public static readonly COLON = 37;
	public static readonly DOT = 38;
	public static readonly PLUS_PLUS = 39;
	public static readonly MINUS_MINUS = 40;
	public static readonly DECLARE_ASSIGN = 41;
	public static readonly ELLIPSIS = 42;
	public static readonly LOGICAL_OR = 43;
	public static readonly LOGICAL_AND = 44;
	public static readonly EQUALS = 45;
	public static readonly NOT_EQUALS = 46;
	public static readonly LESS = 47;
	public static readonly LESS_OR_EQUALS = 48;
	public static readonly GREATER = 49;
	public static readonly GREATER_OR_EQUALS = 50;
	public static readonly OR = 51;
	public static readonly DIV = 52;
	public static readonly MOD = 53;
	public static readonly LSHIFT = 54;
	public static readonly RSHIFT = 55;
	public static readonly BIT_CLEAR = 56;
	public static readonly UNDERLYING = 57;
	public static readonly EXCLAMATION = 58;
	public static readonly PLUS = 59;
	public static readonly MINUS = 60;
	public static readonly CARET = 61;
	public static readonly STAR = 62;
	public static readonly AMPERSAND = 63;
	public static readonly RECEIVE = 64;
	public static readonly DECIMAL_LIT = 65;
	public static readonly BINARY_LIT = 66;
	public static readonly OCTAL_LIT = 67;
	public static readonly HEX_LIT = 68;
	public static readonly FLOAT_LIT = 69;
	public static readonly DECIMAL_FLOAT_LIT = 70;
	public static readonly HEX_FLOAT_LIT = 71;
	public static readonly IMAGINARY_LIT = 72;
	public static readonly RUNE_LIT = 73;
	public static readonly BYTE_VALUE = 74;
	public static readonly OCTAL_BYTE_VALUE = 75;
	public static readonly HEX_BYTE_VALUE = 76;
	public static readonly LITTLE_U_VALUE = 77;
	public static readonly BIG_U_VALUE = 78;
	public static readonly RAW_STRING_LIT = 79;
	public static readonly INTERPRETED_STRING_LIT = 80;
	public static readonly WS = 81;
	public static readonly COMMENT = 82;
	public static readonly TERMINATOR = 83;
	public static readonly LINE_COMMENT = 84;
	public static readonly WS_NLSEMI = 85;
	public static readonly COMMENT_NLSEMI = 86;
	public static readonly LINE_COMMENT_NLSEMI = 87;
	public static readonly EOS = 88;
	public static readonly OTHER = 89;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_packageClause = 1;
	public static readonly RULE_importDecl = 2;
	public static readonly RULE_importSpec = 3;
	public static readonly RULE_importPath = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_constDecl = 6;
	public static readonly RULE_constSpec = 7;
	public static readonly RULE_identifierList = 8;
	public static readonly RULE_expressionList = 9;
	public static readonly RULE_typeDecl = 10;
	public static readonly RULE_typeSpec = 11;
	public static readonly RULE_aliasDecl = 12;
	public static readonly RULE_typeDef = 13;
	public static readonly RULE_typeParameters = 14;
	public static readonly RULE_typeParameterDecl = 15;
	public static readonly RULE_typeElement = 16;
	public static readonly RULE_typeTerm = 17;
	public static readonly RULE_functionDecl = 18;
	public static readonly RULE_methodDecl = 19;
	public static readonly RULE_receiver = 20;
	public static readonly RULE_varDecl = 21;
	public static readonly RULE_varSpec = 22;
	public static readonly RULE_block = 23;
	public static readonly RULE_statementList = 24;
	public static readonly RULE_statement = 25;
	public static readonly RULE_simpleStmt = 26;
	public static readonly RULE_expressionStmt = 27;
	public static readonly RULE_sendStmt = 28;
	public static readonly RULE_incDecStmt = 29;
	public static readonly RULE_assignment = 30;
	public static readonly RULE_assign_op = 31;
	public static readonly RULE_shortVarDecl = 32;
	public static readonly RULE_labeledStmt = 33;
	public static readonly RULE_returnStmt = 34;
	public static readonly RULE_breakStmt = 35;
	public static readonly RULE_continueStmt = 36;
	public static readonly RULE_gotoStmt = 37;
	public static readonly RULE_fallthroughStmt = 38;
	public static readonly RULE_deferStmt = 39;
	public static readonly RULE_ifStmt = 40;
	public static readonly RULE_switchStmt = 41;
	public static readonly RULE_exprSwitchStmt = 42;
	public static readonly RULE_exprCaseClause = 43;
	public static readonly RULE_exprSwitchCase = 44;
	public static readonly RULE_typeSwitchStmt = 45;
	public static readonly RULE_typeSwitchGuard = 46;
	public static readonly RULE_typeCaseClause = 47;
	public static readonly RULE_typeSwitchCase = 48;
	public static readonly RULE_typeList = 49;
	public static readonly RULE_selectStmt = 50;
	public static readonly RULE_commClause = 51;
	public static readonly RULE_commCase = 52;
	public static readonly RULE_recvStmt = 53;
	public static readonly RULE_forStmt = 54;
	public static readonly RULE_forClause = 55;
	public static readonly RULE_rangeClause = 56;
	public static readonly RULE_goStmt = 57;
	public static readonly RULE_type_ = 58;
	public static readonly RULE_typeArgs = 59;
	public static readonly RULE_typeName = 60;
	public static readonly RULE_typeLit = 61;
	public static readonly RULE_arrayType = 62;
	public static readonly RULE_arrayLength = 63;
	public static readonly RULE_elementType = 64;
	public static readonly RULE_pointerType = 65;
	public static readonly RULE_interfaceType = 66;
	public static readonly RULE_sliceType = 67;
	public static readonly RULE_mapType = 68;
	public static readonly RULE_channelType = 69;
	public static readonly RULE_methodSpec = 70;
	public static readonly RULE_functionType = 71;
	public static readonly RULE_signature = 72;
	public static readonly RULE_result = 73;
	public static readonly RULE_parameters = 74;
	public static readonly RULE_parameterDecl = 75;
	public static readonly RULE_expression = 76;
	public static readonly RULE_primaryExpr = 77;
	public static readonly RULE_conversion = 78;
	public static readonly RULE_operand = 79;
	public static readonly RULE_literal = 80;
	public static readonly RULE_basicLit = 81;
	public static readonly RULE_integer = 82;
	public static readonly RULE_operandName = 83;
	public static readonly RULE_qualifiedIdent = 84;
	public static readonly RULE_compositeLit = 85;
	public static readonly RULE_literalType = 86;
	public static readonly RULE_literalValue = 87;
	public static readonly RULE_elementList = 88;
	public static readonly RULE_keyedElement = 89;
	public static readonly RULE_key = 90;
	public static readonly RULE_element = 91;
	public static readonly RULE_structType = 92;
	public static readonly RULE_fieldDecl = 93;
	public static readonly RULE_string_ = 94;
	public static readonly RULE_embeddedField = 95;
	public static readonly RULE_functionLit = 96;
	public static readonly RULE_index = 97;
	public static readonly RULE_slice_ = 98;
	public static readonly RULE_typeAssertion = 99;
	public static readonly RULE_arguments = 100;
	public static readonly RULE_methodExpr = 101;
	public static readonly RULE_eos = 102;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "packageClause", "importDecl", "importSpec", "importPath", 
		"declaration", "constDecl", "constSpec", "identifierList", "expressionList", 
		"typeDecl", "typeSpec", "aliasDecl", "typeDef", "typeParameters", "typeParameterDecl", 
		"typeElement", "typeTerm", "functionDecl", "methodDecl", "receiver", "varDecl", 
		"varSpec", "block", "statementList", "statement", "simpleStmt", "expressionStmt", 
		"sendStmt", "incDecStmt", "assignment", "assign_op", "shortVarDecl", "labeledStmt", 
		"returnStmt", "breakStmt", "continueStmt", "gotoStmt", "fallthroughStmt", 
		"deferStmt", "ifStmt", "switchStmt", "exprSwitchStmt", "exprCaseClause", 
		"exprSwitchCase", "typeSwitchStmt", "typeSwitchGuard", "typeCaseClause", 
		"typeSwitchCase", "typeList", "selectStmt", "commClause", "commCase", 
		"recvStmt", "forStmt", "forClause", "rangeClause", "goStmt", "type_", 
		"typeArgs", "typeName", "typeLit", "arrayType", "arrayLength", "elementType", 
		"pointerType", "interfaceType", "sliceType", "mapType", "channelType", 
		"methodSpec", "functionType", "signature", "result", "parameters", "parameterDecl", 
		"expression", "primaryExpr", "conversion", "operand", "literal", "basicLit", 
		"integer", "operandName", "qualifiedIdent", "compositeLit", "literalType", 
		"literalValue", "elementList", "keyedElement", "key", "element", "structType", 
		"fieldDecl", "string_", "embeddedField", "functionLit", "index", "slice_", 
		"typeAssertion", "arguments", "methodExpr", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'break'", "'default'", "'func'", "'interface'", "'select'", 
		"'case'", "'defer'", "'go'", "'map'", "'struct'", "'chan'", "'else'", 
		"'goto'", "'package'", "'switch'", "'const'", "'fallthrough'", "'if'", 
		"'range'", "'type'", "'continue'", "'for'", "'import'", "'return'", "'var'", 
		"'nil'", undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "'='", "','", 
		"';'", "':'", "'.'", "'++'", "'--'", "':='", "'...'", "'||'", "'&&'", 
		"'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'|'", "'/'", "'%'", "'<<'", 
		"'>>'", "'&^'", "'~'", "'!'", "'+'", "'-'", "'^'", "'*'", "'&'", "'<-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BREAK", "DEFAULT", "FUNC", "INTERFACE", "SELECT", "CASE", 
		"DEFER", "GO", "MAP", "STRUCT", "CHAN", "ELSE", "GOTO", "PACKAGE", "SWITCH", 
		"CONST", "FALLTHROUGH", "IF", "RANGE", "TYPE", "CONTINUE", "FOR", "IMPORT", 
		"RETURN", "VAR", "NIL_LIT", "IDENTIFIER", "L_PAREN", "R_PAREN", "L_CURLY", 
		"R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "SEMI", "COLON", 
		"DOT", "PLUS_PLUS", "MINUS_MINUS", "DECLARE_ASSIGN", "ELLIPSIS", "LOGICAL_OR", 
		"LOGICAL_AND", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", 
		"GREATER_OR_EQUALS", "OR", "DIV", "MOD", "LSHIFT", "RSHIFT", "BIT_CLEAR", 
		"UNDERLYING", "EXCLAMATION", "PLUS", "MINUS", "CARET", "STAR", "AMPERSAND", 
		"RECEIVE", "DECIMAL_LIT", "BINARY_LIT", "OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", 
		"DECIMAL_FLOAT_LIT", "HEX_FLOAT_LIT", "IMAGINARY_LIT", "RUNE_LIT", "BYTE_VALUE", 
		"OCTAL_BYTE_VALUE", "HEX_BYTE_VALUE", "LITTLE_U_VALUE", "BIG_U_VALUE", 
		"RAW_STRING_LIT", "INTERPRETED_STRING_LIT", "WS", "COMMENT", "TERMINATOR", 
		"LINE_COMMENT", "WS_NLSEMI", "COMMENT_NLSEMI", "LINE_COMMENT_NLSEMI", 
		"EOS", "OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GoParser._LITERAL_NAMES, GoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GoParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GoParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GoParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.packageClause();
			this.state = 207;
			this.eos();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.IMPORT) {
				{
				{
				this.state = 208;
				this.importDecl();
				this.state = 209;
				this.eos();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.FUNC) | (1 << GoParser.CONST) | (1 << GoParser.TYPE) | (1 << GoParser.VAR))) !== 0)) {
				{
				{
				this.state = 219;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 216;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 217;
					this.methodDecl();
					}
					break;

				case 3:
					{
					this.state = 218;
					this.declaration();
					}
					break;
				}
				this.state = 221;
				this.eos();
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this.match(GoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageClause(): PackageClauseContext {
		let _localctx: PackageClauseContext = new PackageClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GoParser.RULE_packageClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(GoParser.PACKAGE);
			this.state = 231;
			_localctx._packageName = this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GoParser.RULE_importDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(GoParser.IMPORT);
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
			case GoParser.DOT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				{
				this.state = 234;
				this.importSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 235;
				this.match(GoParser.L_PAREN);
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER || _la === GoParser.DOT || _la === GoParser.RAW_STRING_LIT || _la === GoParser.INTERPRETED_STRING_LIT) {
					{
					{
					this.state = 236;
					this.importSpec();
					this.state = 237;
					this.eos();
					}
					}
					this.state = 243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 244;
				this.match(GoParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importSpec(): ImportSpecContext {
		let _localctx: ImportSpecContext = new ImportSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GoParser.RULE_importSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.IDENTIFIER || _la === GoParser.DOT) {
				{
				this.state = 247;
				_localctx._alias = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === GoParser.IDENTIFIER || _la === GoParser.DOT)) {
					_localctx._alias = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 250;
			this.importPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GoParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GoParser.RULE_declaration);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.constDecl();
				}
				break;
			case GoParser.TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.typeDecl();
				}
				break;
			case GoParser.VAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 256;
				this.varDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDecl(): ConstDeclContext {
		let _localctx: ConstDeclContext = new ConstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GoParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(GoParser.CONST);
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				{
				this.state = 260;
				this.constSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 261;
				this.match(GoParser.L_PAREN);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER) {
					{
					{
					this.state = 262;
					this.constSpec();
					this.state = 263;
					this.eos();
					}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 270;
				this.match(GoParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constSpec(): ConstSpecContext {
		let _localctx: ConstSpecContext = new ConstSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GoParser.RULE_constSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.identifierList();
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || _la === GoParser.STAR || _la === GoParser.RECEIVE) {
					{
					this.state = 274;
					this.type_();
					}
				}

				this.state = 277;
				this.match(GoParser.ASSIGN);
				this.state = 278;
				this.expressionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GoParser.RULE_identifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(GoParser.IDENTIFIER);
			this.state = 286;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 282;
					this.match(GoParser.COMMA);
					this.state = 283;
					this.match(GoParser.IDENTIFIER);
					}
					}
				}
				this.state = 288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, GoParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.expression(0);
			this.state = 294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 290;
					this.match(GoParser.COMMA);
					this.state = 291;
					this.expression(0);
					}
					}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDecl(): TypeDeclContext {
		let _localctx: TypeDeclContext = new TypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GoParser.RULE_typeDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(GoParser.TYPE);
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				{
				this.state = 298;
				this.typeSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 299;
				this.match(GoParser.L_PAREN);
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER) {
					{
					{
					this.state = 300;
					this.typeSpec();
					this.state = 301;
					this.eos();
					}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 308;
				this.match(GoParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GoParser.RULE_typeSpec);
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 311;
				this.aliasDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this.typeDef();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasDecl(): AliasDeclContext {
		let _localctx: AliasDeclContext = new AliasDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GoParser.RULE_aliasDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(GoParser.IDENTIFIER);
			this.state = 316;
			this.match(GoParser.ASSIGN);
			this.state = 317;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDef(): TypeDefContext {
		let _localctx: TypeDefContext = new TypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GoParser.RULE_typeDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(GoParser.IDENTIFIER);
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 320;
				this.typeParameters();
				}
				break;
			}
			this.state = 323;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GoParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(GoParser.L_BRACKET);
			this.state = 326;
			this.typeParameterDecl();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.COMMA) {
				{
				{
				this.state = 327;
				this.match(GoParser.COMMA);
				this.state = 328;
				this.typeParameterDecl();
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 334;
			this.match(GoParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterDecl(): TypeParameterDeclContext {
		let _localctx: TypeParameterDeclContext = new TypeParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GoParser.RULE_typeParameterDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.identifierList();
			this.state = 337;
			this.typeElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeElement(): TypeElementContext {
		let _localctx: TypeElementContext = new TypeElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GoParser.RULE_typeElement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.typeTerm();
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 340;
					this.match(GoParser.OR);
					this.state = 341;
					this.typeTerm();
					}
					}
				}
				this.state = 346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTerm(): TypeTermContext {
		let _localctx: TypeTermContext = new TypeTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GoParser.RULE_typeTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.UNDERLYING) {
				{
				this.state = 347;
				this.match(GoParser.UNDERLYING);
				}
			}

			this.state = 350;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GoParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(GoParser.FUNC);
			this.state = 353;
			this.match(GoParser.IDENTIFIER);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.L_BRACKET) {
				{
				this.state = 354;
				this.typeParameters();
				}
			}

			this.state = 357;
			this.signature();
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 358;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, GoParser.RULE_methodDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(GoParser.FUNC);
			this.state = 362;
			this.receiver();
			this.state = 363;
			this.match(GoParser.IDENTIFIER);
			this.state = 364;
			this.signature();
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiver(): ReceiverContext {
		let _localctx: ReceiverContext = new ReceiverContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GoParser.RULE_receiver);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.parameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GoParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(GoParser.VAR);
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				{
				this.state = 371;
				this.varSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 372;
				this.match(GoParser.L_PAREN);
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER) {
					{
					{
					this.state = 373;
					this.varSpec();
					this.state = 374;
					this.eos();
					}
					}
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 381;
				this.match(GoParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varSpec(): VarSpecContext {
		let _localctx: VarSpecContext = new VarSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, GoParser.RULE_varSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.identifierList();
			this.state = 392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.STAR:
			case GoParser.RECEIVE:
				{
				this.state = 385;
				this.type_();
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 386;
					this.match(GoParser.ASSIGN);
					this.state = 387;
					this.expressionList();
					}
					break;
				}
				}
				break;
			case GoParser.ASSIGN:
				{
				this.state = 390;
				this.match(GoParser.ASSIGN);
				this.state = 391;
				this.expressionList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, GoParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(GoParser.L_CURLY);
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 395;
				this.statementList();
				}
				break;
			}
			this.state = 398;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, GoParser.RULE_statementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 407;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						this.state = 401;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === GoParser.SEMI) {
							{
							this.state = 400;
							this.match(GoParser.SEMI);
							}
						}

						}
						break;

					case 2:
						{
						this.state = 404;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === GoParser.EOS) {
							{
							this.state = 403;
							this.match(GoParser.EOS);
							}
						}

						}
						break;

					case 3:
						{
						this.state = 406;
						if (!(this.closingBracket())) {
							throw this.createFailedPredicateException("this.closingBracket()");
						}
						}
						break;
					}
					this.state = 409;
					this.statement();
					this.state = 410;
					this.eos();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, GoParser.RULE_statement);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 416;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				this.labeledStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 418;
				this.simpleStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 419;
				this.goStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 420;
				this.returnStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 421;
				this.breakStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 422;
				this.continueStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 423;
				this.gotoStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 424;
				this.fallthroughStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 425;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 426;
				this.ifStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 427;
				this.switchStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 428;
				this.selectStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 429;
				this.forStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 430;
				this.deferStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GoParser.RULE_simpleStmt);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.sendStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 434;
				this.incDecStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 435;
				this.assignment();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 436;
				this.expressionStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 437;
				this.shortVarDecl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, GoParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sendStmt(): SendStmtContext {
		let _localctx: SendStmtContext = new SendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, GoParser.RULE_sendStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			_localctx._channel = this.expression(0);
			this.state = 443;
			this.match(GoParser.RECEIVE);
			this.state = 444;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incDecStmt(): IncDecStmtContext {
		let _localctx: IncDecStmtContext = new IncDecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, GoParser.RULE_incDecStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.expression(0);
			this.state = 447;
			_la = this._input.LA(1);
			if (!(_la === GoParser.PLUS_PLUS || _la === GoParser.MINUS_MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, GoParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.expressionList();
			this.state = 450;
			this.assign_op();
			this.state = 451;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_op(): Assign_opContext {
		let _localctx: Assign_opContext = new Assign_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, GoParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (GoParser.OR - 51)) | (1 << (GoParser.DIV - 51)) | (1 << (GoParser.MOD - 51)) | (1 << (GoParser.LSHIFT - 51)) | (1 << (GoParser.RSHIFT - 51)) | (1 << (GoParser.BIT_CLEAR - 51)) | (1 << (GoParser.PLUS - 51)) | (1 << (GoParser.MINUS - 51)) | (1 << (GoParser.CARET - 51)) | (1 << (GoParser.STAR - 51)) | (1 << (GoParser.AMPERSAND - 51)))) !== 0)) {
				{
				this.state = 453;
				_la = this._input.LA(1);
				if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (GoParser.OR - 51)) | (1 << (GoParser.DIV - 51)) | (1 << (GoParser.MOD - 51)) | (1 << (GoParser.LSHIFT - 51)) | (1 << (GoParser.RSHIFT - 51)) | (1 << (GoParser.BIT_CLEAR - 51)) | (1 << (GoParser.PLUS - 51)) | (1 << (GoParser.MINUS - 51)) | (1 << (GoParser.CARET - 51)) | (1 << (GoParser.STAR - 51)) | (1 << (GoParser.AMPERSAND - 51)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 456;
			this.match(GoParser.ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shortVarDecl(): ShortVarDeclContext {
		let _localctx: ShortVarDeclContext = new ShortVarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, GoParser.RULE_shortVarDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.identifierList();
			this.state = 459;
			this.match(GoParser.DECLARE_ASSIGN);
			this.state = 460;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStmt(): LabeledStmtContext {
		let _localctx: LabeledStmtContext = new LabeledStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, GoParser.RULE_labeledStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(GoParser.IDENTIFIER);
			this.state = 463;
			this.match(GoParser.COLON);
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 464;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, GoParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(GoParser.RETURN);
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 468;
				this.expressionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStmt(): BreakStmtContext {
		let _localctx: BreakStmtContext = new BreakStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, GoParser.RULE_breakStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(GoParser.BREAK);
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 472;
				this.match(GoParser.IDENTIFIER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStmt(): ContinueStmtContext {
		let _localctx: ContinueStmtContext = new ContinueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, GoParser.RULE_continueStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(GoParser.CONTINUE);
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 476;
				this.match(GoParser.IDENTIFIER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gotoStmt(): GotoStmtContext {
		let _localctx: GotoStmtContext = new GotoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, GoParser.RULE_gotoStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(GoParser.GOTO);
			this.state = 480;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fallthroughStmt(): FallthroughStmtContext {
		let _localctx: FallthroughStmtContext = new FallthroughStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, GoParser.RULE_fallthroughStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(GoParser.FALLTHROUGH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deferStmt(): DeferStmtContext {
		let _localctx: DeferStmtContext = new DeferStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, GoParser.RULE_deferStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(GoParser.DEFER);
			this.state = 485;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, GoParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(GoParser.IF);
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 488;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 489;
				this.eos();
				this.state = 490;
				this.expression(0);
				}
				break;

			case 3:
				{
				this.state = 492;
				this.simpleStmt();
				this.state = 493;
				this.eos();
				this.state = 494;
				this.expression(0);
				}
				break;
			}
			this.state = 498;
			this.block();
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 499;
				this.match(GoParser.ELSE);
				this.state = 502;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GoParser.IF:
					{
					this.state = 500;
					this.ifStmt();
					}
					break;
				case GoParser.L_CURLY:
					{
					this.state = 501;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStmt(): SwitchStmtContext {
		let _localctx: SwitchStmtContext = new SwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, GoParser.RULE_switchStmt);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.exprSwitchStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.typeSwitchStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprSwitchStmt(): ExprSwitchStmtContext {
		let _localctx: ExprSwitchStmtContext = new ExprSwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, GoParser.RULE_exprSwitchStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(GoParser.SWITCH);
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 511;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 515;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 514;
					this.simpleStmt();
					}
					break;
				}
				this.state = 517;
				this.eos();
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 518;
					this.expression(0);
					}
				}

				}
				break;
			}
			this.state = 523;
			this.match(GoParser.L_CURLY);
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.DEFAULT || _la === GoParser.CASE) {
				{
				{
				this.state = 524;
				this.exprCaseClause();
				}
				}
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 530;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprCaseClause(): ExprCaseClauseContext {
		let _localctx: ExprCaseClauseContext = new ExprCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, GoParser.RULE_exprCaseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.exprSwitchCase();
			this.state = 533;
			this.match(GoParser.COLON);
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 534;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprSwitchCase(): ExprSwitchCaseContext {
		let _localctx: ExprSwitchCaseContext = new ExprSwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, GoParser.RULE_exprSwitchCase);
		try {
			this.state = 540;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.match(GoParser.CASE);
				this.state = 538;
				this.expressionList();
				}
				break;
			case GoParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.match(GoParser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSwitchStmt(): TypeSwitchStmtContext {
		let _localctx: TypeSwitchStmtContext = new TypeSwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, GoParser.RULE_typeSwitchStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(GoParser.SWITCH);
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 543;
				this.typeSwitchGuard();
				}
				break;

			case 2:
				{
				this.state = 544;
				this.eos();
				this.state = 545;
				this.typeSwitchGuard();
				}
				break;

			case 3:
				{
				this.state = 547;
				this.simpleStmt();
				this.state = 548;
				this.eos();
				this.state = 549;
				this.typeSwitchGuard();
				}
				break;
			}
			this.state = 553;
			this.match(GoParser.L_CURLY);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.DEFAULT || _la === GoParser.CASE) {
				{
				{
				this.state = 554;
				this.typeCaseClause();
				}
				}
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 560;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSwitchGuard(): TypeSwitchGuardContext {
		let _localctx: TypeSwitchGuardContext = new TypeSwitchGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, GoParser.RULE_typeSwitchGuard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.match(GoParser.IDENTIFIER);
				this.state = 563;
				this.match(GoParser.DECLARE_ASSIGN);
				}
				break;
			}
			this.state = 566;
			this.primaryExpr(0);
			this.state = 567;
			this.match(GoParser.DOT);
			this.state = 568;
			this.match(GoParser.L_PAREN);
			this.state = 569;
			this.match(GoParser.TYPE);
			this.state = 570;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeCaseClause(): TypeCaseClauseContext {
		let _localctx: TypeCaseClauseContext = new TypeCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, GoParser.RULE_typeCaseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.typeSwitchCase();
			this.state = 573;
			this.match(GoParser.COLON);
			this.state = 575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 574;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSwitchCase(): TypeSwitchCaseContext {
		let _localctx: TypeSwitchCaseContext = new TypeSwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, GoParser.RULE_typeSwitchCase);
		try {
			this.state = 580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 577;
				this.match(GoParser.CASE);
				this.state = 578;
				this.typeList();
				}
				break;
			case GoParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 579;
				this.match(GoParser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, GoParser.RULE_typeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.STAR:
			case GoParser.RECEIVE:
				{
				this.state = 582;
				this.type_();
				}
				break;
			case GoParser.NIL_LIT:
				{
				this.state = 583;
				this.match(GoParser.NIL_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 593;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 586;
					this.match(GoParser.COMMA);
					this.state = 589;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GoParser.FUNC:
					case GoParser.INTERFACE:
					case GoParser.MAP:
					case GoParser.STRUCT:
					case GoParser.CHAN:
					case GoParser.IDENTIFIER:
					case GoParser.L_PAREN:
					case GoParser.L_BRACKET:
					case GoParser.STAR:
					case GoParser.RECEIVE:
						{
						this.state = 587;
						this.type_();
						}
						break;
					case GoParser.NIL_LIT:
						{
						this.state = 588;
						this.match(GoParser.NIL_LIT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectStmt(): SelectStmtContext {
		let _localctx: SelectStmtContext = new SelectStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, GoParser.RULE_selectStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(GoParser.SELECT);
			this.state = 597;
			this.match(GoParser.L_CURLY);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.DEFAULT || _la === GoParser.CASE) {
				{
				{
				this.state = 598;
				this.commClause();
				}
				}
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 604;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commClause(): CommClauseContext {
		let _localctx: CommClauseContext = new CommClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, GoParser.RULE_commClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this.commCase();
			this.state = 607;
			this.match(GoParser.COLON);
			this.state = 609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 608;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commCase(): CommCaseContext {
		let _localctx: CommCaseContext = new CommCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, GoParser.RULE_commCase);
		try {
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 611;
				this.match(GoParser.CASE);
				this.state = 614;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 612;
					this.sendStmt();
					}
					break;

				case 2:
					{
					this.state = 613;
					this.recvStmt();
					}
					break;
				}
				}
				break;
			case GoParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 616;
				this.match(GoParser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recvStmt(): RecvStmtContext {
		let _localctx: RecvStmtContext = new RecvStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, GoParser.RULE_recvStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 619;
				this.expressionList();
				this.state = 620;
				this.match(GoParser.ASSIGN);
				}
				break;

			case 2:
				{
				this.state = 622;
				this.identifierList();
				this.state = 623;
				this.match(GoParser.DECLARE_ASSIGN);
				}
				break;
			}
			this.state = 627;
			_localctx._recvExpr = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, GoParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.match(GoParser.FOR);
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 630;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 633;
				this.forClause();
				}
				break;

			case 3:
				{
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.RANGE - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 634;
					this.rangeClause();
					}
				}

				}
				break;
			}
			this.state = 639;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forClause(): ForClauseContext {
		let _localctx: ForClauseContext = new ForClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, GoParser.RULE_forClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 641;
				_localctx._initStmt = this.simpleStmt();
				}
				break;
			}
			this.state = 644;
			this.eos();
			this.state = 646;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 645;
				this.expression(0);
				}
				break;
			}
			this.state = 648;
			this.eos();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
				{
				this.state = 649;
				_localctx._postStmt = this.simpleStmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeClause(): RangeClauseContext {
		let _localctx: RangeClauseContext = new RangeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, GoParser.RULE_rangeClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 652;
				this.expressionList();
				this.state = 653;
				this.match(GoParser.ASSIGN);
				}
				break;

			case 2:
				{
				this.state = 655;
				this.identifierList();
				this.state = 656;
				this.match(GoParser.DECLARE_ASSIGN);
				}
				break;
			}
			this.state = 660;
			this.match(GoParser.RANGE);
			this.state = 661;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public goStmt(): GoStmtContext {
		let _localctx: GoStmtContext = new GoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, GoParser.RULE_goStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.match(GoParser.GO);
			this.state = 664;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 116, GoParser.RULE_type_);
		try {
			this.state = 675;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 666;
				this.typeName();
				this.state = 668;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 667;
					this.typeArgs();
					}
					break;
				}
				}
				break;
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.L_BRACKET:
			case GoParser.STAR:
			case GoParser.RECEIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 670;
				this.typeLit();
				}
				break;
			case GoParser.L_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 671;
				this.match(GoParser.L_PAREN);
				this.state = 672;
				this.type_();
				this.state = 673;
				this.match(GoParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgs(): TypeArgsContext {
		let _localctx: TypeArgsContext = new TypeArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, GoParser.RULE_typeArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.match(GoParser.L_BRACKET);
			this.state = 678;
			this.typeList();
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.COMMA) {
				{
				this.state = 679;
				this.match(GoParser.COMMA);
				}
			}

			this.state = 682;
			this.match(GoParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, GoParser.RULE_typeName);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.qualifiedIdent();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.match(GoParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLit(): TypeLitContext {
		let _localctx: TypeLitContext = new TypeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, GoParser.RULE_typeLit);
		try {
			this.state = 696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.arrayType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 689;
				this.structType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 690;
				this.pointerType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 691;
				this.functionType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 692;
				this.interfaceType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 693;
				this.sliceType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 694;
				this.mapType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 695;
				this.channelType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, GoParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.match(GoParser.L_BRACKET);
			this.state = 699;
			this.arrayLength();
			this.state = 700;
			this.match(GoParser.R_BRACKET);
			this.state = 701;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLength(): ArrayLengthContext {
		let _localctx: ArrayLengthContext = new ArrayLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, GoParser.RULE_arrayLength);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementType(): ElementTypeContext {
		let _localctx: ElementTypeContext = new ElementTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, GoParser.RULE_elementType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerType(): PointerTypeContext {
		let _localctx: PointerTypeContext = new PointerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, GoParser.RULE_pointerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(GoParser.STAR);
			this.state = 708;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, GoParser.RULE_interfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(GoParser.INTERFACE);
			this.state = 711;
			this.match(GoParser.L_CURLY);
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.UNDERLYING - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.RECEIVE - 57)))) !== 0)) {
				{
				{
				this.state = 714;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 712;
					this.methodSpec();
					}
					break;

				case 2:
					{
					this.state = 713;
					this.typeElement();
					}
					break;
				}
				this.state = 716;
				this.eos();
				}
				}
				this.state = 722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 723;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceType(): SliceTypeContext {
		let _localctx: SliceTypeContext = new SliceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, GoParser.RULE_sliceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(GoParser.L_BRACKET);
			this.state = 726;
			this.match(GoParser.R_BRACKET);
			this.state = 727;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapType(): MapTypeContext {
		let _localctx: MapTypeContext = new MapTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, GoParser.RULE_mapType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.match(GoParser.MAP);
			this.state = 730;
			this.match(GoParser.L_BRACKET);
			this.state = 731;
			this.type_();
			this.state = 732;
			this.match(GoParser.R_BRACKET);
			this.state = 733;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public channelType(): ChannelTypeContext {
		let _localctx: ChannelTypeContext = new ChannelTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, GoParser.RULE_channelType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 735;
				this.match(GoParser.CHAN);
				}
				break;

			case 2:
				{
				this.state = 736;
				this.match(GoParser.CHAN);
				this.state = 737;
				this.match(GoParser.RECEIVE);
				}
				break;

			case 3:
				{
				this.state = 738;
				this.match(GoParser.RECEIVE);
				this.state = 739;
				this.match(GoParser.CHAN);
				}
				break;
			}
			this.state = 742;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodSpec(): MethodSpecContext {
		let _localctx: MethodSpecContext = new MethodSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, GoParser.RULE_methodSpec);
		try {
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.match(GoParser.IDENTIFIER);
				this.state = 745;
				this.parameters();
				this.state = 746;
				this.result();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 748;
				this.match(GoParser.IDENTIFIER);
				this.state = 749;
				this.parameters();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, GoParser.RULE_functionType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.match(GoParser.FUNC);
			this.state = 753;
			this.signature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, GoParser.RULE_signature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.parameters();
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 756;
				this.result();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, GoParser.RULE_result);
		try {
			this.state = 761;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 759;
				this.parameters();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 760;
				this.type_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, GoParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(GoParser.L_PAREN);
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (GoParser.ELLIPSIS - 42)) | (1 << (GoParser.STAR - 42)) | (1 << (GoParser.RECEIVE - 42)))) !== 0)) {
				{
				this.state = 764;
				this.parameterDecl();
				this.state = 769;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 765;
						this.match(GoParser.COMMA);
						this.state = 766;
						this.parameterDecl();
						}
						}
					}
					this.state = 771;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.COMMA) {
					{
					this.state = 772;
					this.match(GoParser.COMMA);
					}
				}

				}
			}

			this.state = 777;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, GoParser.RULE_parameterDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 779;
				this.identifierList();
				}
				break;
			}
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.ELLIPSIS) {
				{
				this.state = 782;
				this.match(GoParser.ELLIPSIS);
				}
			}

			this.state = 785;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 152;
		this.enterRecursionRule(_localctx, 152, GoParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 788;
				this.primaryExpr(0);
				}
				break;

			case 2:
				{
				this.state = 789;
				_localctx._unary_op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)))) !== 0))) {
					_localctx._unary_op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 790;
				this.expression(6);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 810;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 808;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 793;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 794;
						_localctx._mul_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (GoParser.DIV - 52)) | (1 << (GoParser.MOD - 52)) | (1 << (GoParser.LSHIFT - 52)) | (1 << (GoParser.RSHIFT - 52)) | (1 << (GoParser.BIT_CLEAR - 52)) | (1 << (GoParser.STAR - 52)) | (1 << (GoParser.AMPERSAND - 52)))) !== 0))) {
							_localctx._mul_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 795;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 796;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 797;
						_localctx._add_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (GoParser.OR - 51)) | (1 << (GoParser.PLUS - 51)) | (1 << (GoParser.MINUS - 51)) | (1 << (GoParser.CARET - 51)))) !== 0))) {
							_localctx._add_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 798;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 799;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 800;
						_localctx._rel_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (GoParser.EQUALS - 45)) | (1 << (GoParser.NOT_EQUALS - 45)) | (1 << (GoParser.LESS - 45)) | (1 << (GoParser.LESS_OR_EQUALS - 45)) | (1 << (GoParser.GREATER - 45)) | (1 << (GoParser.GREATER_OR_EQUALS - 45)))) !== 0))) {
							_localctx._rel_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 801;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 802;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 803;
						this.match(GoParser.LOGICAL_AND);
						this.state = 804;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 805;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 806;
						this.match(GoParser.LOGICAL_OR);
						this.state = 807;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 812;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpr(): PrimaryExprContext;
	public primaryExpr(_p: number): PrimaryExprContext;
	// @RuleVersion(0)
	public primaryExpr(_p?: number): PrimaryExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, _parentState);
		let _prevctx: PrimaryExprContext = _localctx;
		let _startState: number = 154;
		this.enterRecursionRule(_localctx, 154, GoParser.RULE_primaryExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.operand();
				}
				break;

			case 2:
				{
				this.state = 815;
				this.conversion();
				}
				break;

			case 3:
				{
				this.state = 816;
				this.methodExpr();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 830;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PrimaryExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_primaryExpr);
					this.state = 819;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 826;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
					case 1:
						{
						this.state = 820;
						this.match(GoParser.DOT);
						this.state = 821;
						this.match(GoParser.IDENTIFIER);
						}
						break;

					case 2:
						{
						this.state = 822;
						this.index();
						}
						break;

					case 3:
						{
						this.state = 823;
						this.slice_();
						}
						break;

					case 4:
						{
						this.state = 824;
						this.typeAssertion();
						}
						break;

					case 5:
						{
						this.state = 825;
						this.arguments();
						}
						break;
					}
					}
					}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversion(): ConversionContext {
		let _localctx: ConversionContext = new ConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, GoParser.RULE_conversion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.type_();
			this.state = 834;
			this.match(GoParser.L_PAREN);
			this.state = 835;
			this.expression(0);
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.COMMA) {
				{
				this.state = 836;
				this.match(GoParser.COMMA);
				}
			}

			this.state = 839;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, GoParser.RULE_operand);
		try {
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 841;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 842;
				this.operandName();
				this.state = 844;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 843;
					this.typeArgs();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 846;
				this.match(GoParser.L_PAREN);
				this.state = 847;
				this.expression(0);
				this.state = 848;
				this.match(GoParser.R_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, GoParser.RULE_literal);
		try {
			this.state = 855;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.NIL_LIT:
			case GoParser.DECIMAL_LIT:
			case GoParser.BINARY_LIT:
			case GoParser.OCTAL_LIT:
			case GoParser.HEX_LIT:
			case GoParser.FLOAT_LIT:
			case GoParser.IMAGINARY_LIT:
			case GoParser.RUNE_LIT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 852;
				this.basicLit();
				}
				break;
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.IDENTIFIER:
			case GoParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 853;
				this.compositeLit();
				}
				break;
			case GoParser.FUNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 854;
				this.functionLit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, GoParser.RULE_basicLit);
		try {
			this.state = 861;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.NIL_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 857;
				this.match(GoParser.NIL_LIT);
				}
				break;
			case GoParser.DECIMAL_LIT:
			case GoParser.BINARY_LIT:
			case GoParser.OCTAL_LIT:
			case GoParser.HEX_LIT:
			case GoParser.IMAGINARY_LIT:
			case GoParser.RUNE_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 858;
				this.integer();
				}
				break;
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 859;
				this.string_();
				}
				break;
			case GoParser.FLOAT_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 860;
				this.match(GoParser.FLOAT_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, GoParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			_la = this._input.LA(1);
			if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (GoParser.DECIMAL_LIT - 65)) | (1 << (GoParser.BINARY_LIT - 65)) | (1 << (GoParser.OCTAL_LIT - 65)) | (1 << (GoParser.HEX_LIT - 65)) | (1 << (GoParser.IMAGINARY_LIT - 65)) | (1 << (GoParser.RUNE_LIT - 65)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operandName(): OperandNameContext {
		let _localctx: OperandNameContext = new OperandNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, GoParser.RULE_operandName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdent(): QualifiedIdentContext {
		let _localctx: QualifiedIdentContext = new QualifiedIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, GoParser.RULE_qualifiedIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.match(GoParser.IDENTIFIER);
			this.state = 868;
			this.match(GoParser.DOT);
			this.state = 869;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compositeLit(): CompositeLitContext {
		let _localctx: CompositeLitContext = new CompositeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, GoParser.RULE_compositeLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.literalType();
			this.state = 872;
			this.literalValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalType(): LiteralTypeContext {
		let _localctx: LiteralTypeContext = new LiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, GoParser.RULE_literalType);
		let _la: number;
		try {
			this.state = 886;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 874;
				this.structType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.arrayType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 876;
				this.match(GoParser.L_BRACKET);
				this.state = 877;
				this.match(GoParser.ELLIPSIS);
				this.state = 878;
				this.match(GoParser.R_BRACKET);
				this.state = 879;
				this.elementType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 880;
				this.sliceType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 881;
				this.mapType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 882;
				this.typeName();
				this.state = 884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.L_BRACKET) {
					{
					this.state = 883;
					this.typeArgs();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalValue(): LiteralValueContext {
		let _localctx: LiteralValueContext = new LiteralValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, GoParser.RULE_literalValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 888;
			this.match(GoParser.L_CURLY);
			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_CURLY - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
				{
				this.state = 889;
				this.elementList();
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.COMMA) {
					{
					this.state = 890;
					this.match(GoParser.COMMA);
					}
				}

				}
			}

			this.state = 895;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, GoParser.RULE_elementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			this.keyedElement();
			this.state = 902;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 898;
					this.match(GoParser.COMMA);
					this.state = 899;
					this.keyedElement();
					}
					}
				}
				this.state = 904;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyedElement(): KeyedElementContext {
		let _localctx: KeyedElementContext = new KeyedElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, GoParser.RULE_keyedElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 905;
				this.key();
				this.state = 906;
				this.match(GoParser.COLON);
				}
				break;
			}
			this.state = 910;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, GoParser.RULE_key);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.NIL_LIT:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.EXCLAMATION:
			case GoParser.PLUS:
			case GoParser.MINUS:
			case GoParser.CARET:
			case GoParser.STAR:
			case GoParser.AMPERSAND:
			case GoParser.RECEIVE:
			case GoParser.DECIMAL_LIT:
			case GoParser.BINARY_LIT:
			case GoParser.OCTAL_LIT:
			case GoParser.HEX_LIT:
			case GoParser.FLOAT_LIT:
			case GoParser.IMAGINARY_LIT:
			case GoParser.RUNE_LIT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 912;
				this.expression(0);
				}
				break;
			case GoParser.L_CURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 913;
				this.literalValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, GoParser.RULE_element);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.NIL_LIT:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.EXCLAMATION:
			case GoParser.PLUS:
			case GoParser.MINUS:
			case GoParser.CARET:
			case GoParser.STAR:
			case GoParser.AMPERSAND:
			case GoParser.RECEIVE:
			case GoParser.DECIMAL_LIT:
			case GoParser.BINARY_LIT:
			case GoParser.OCTAL_LIT:
			case GoParser.HEX_LIT:
			case GoParser.FLOAT_LIT:
			case GoParser.IMAGINARY_LIT:
			case GoParser.RUNE_LIT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.expression(0);
				}
				break;
			case GoParser.L_CURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.literalValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structType(): StructTypeContext {
		let _localctx: StructTypeContext = new StructTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, GoParser.RULE_structType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.match(GoParser.STRUCT);
			this.state = 921;
			this.match(GoParser.L_CURLY);
			this.state = 927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.IDENTIFIER || _la === GoParser.STAR) {
				{
				{
				this.state = 922;
				this.fieldDecl();
				this.state = 923;
				this.eos();
				}
				}
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 930;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDecl(): FieldDeclContext {
		let _localctx: FieldDeclContext = new FieldDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, GoParser.RULE_fieldDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 932;
				this.identifierList();
				this.state = 933;
				this.type_();
				}
				break;

			case 2:
				{
				this.state = 935;
				this.embeddedField();
				}
				break;
			}
			this.state = 939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 938;
				_localctx._tag = this.string_();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 188, GoParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			_la = this._input.LA(1);
			if (!(_la === GoParser.RAW_STRING_LIT || _la === GoParser.INTERPRETED_STRING_LIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public embeddedField(): EmbeddedFieldContext {
		let _localctx: EmbeddedFieldContext = new EmbeddedFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, GoParser.RULE_embeddedField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.STAR) {
				{
				this.state = 943;
				this.match(GoParser.STAR);
				}
			}

			this.state = 946;
			this.typeName();
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 947;
				this.typeArgs();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionLit(): FunctionLitContext {
		let _localctx: FunctionLitContext = new FunctionLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, GoParser.RULE_functionLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.match(GoParser.FUNC);
			this.state = 951;
			this.signature();
			this.state = 952;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, GoParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(GoParser.L_BRACKET);
			this.state = 955;
			this.expression(0);
			this.state = 956;
			this.match(GoParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slice_(): Slice_Context {
		let _localctx: Slice_Context = new Slice_Context(this._ctx, this.state);
		this.enterRule(_localctx, 196, GoParser.RULE_slice_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this.match(GoParser.L_BRACKET);
			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 959;
					this.expression(0);
					}
				}

				this.state = 962;
				this.match(GoParser.COLON);
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 963;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
					{
					this.state = 966;
					this.expression(0);
					}
				}

				this.state = 969;
				this.match(GoParser.COLON);
				this.state = 970;
				this.expression(0);
				this.state = 971;
				this.match(GoParser.COLON);
				this.state = 972;
				this.expression(0);
				}
				break;
			}
			this.state = 976;
			this.match(GoParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAssertion(): TypeAssertionContext {
		let _localctx: TypeAssertionContext = new TypeAssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, GoParser.RULE_typeAssertion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 978;
			this.match(GoParser.DOT);
			this.state = 979;
			this.match(GoParser.L_PAREN);
			this.state = 980;
			this.type_();
			this.state = 981;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, GoParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.match(GoParser.L_PAREN);
			this.state = 998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GoParser.EXCLAMATION - 58)) | (1 << (GoParser.PLUS - 58)) | (1 << (GoParser.MINUS - 58)) | (1 << (GoParser.CARET - 58)) | (1 << (GoParser.STAR - 58)) | (1 << (GoParser.AMPERSAND - 58)) | (1 << (GoParser.RECEIVE - 58)) | (1 << (GoParser.DECIMAL_LIT - 58)) | (1 << (GoParser.BINARY_LIT - 58)) | (1 << (GoParser.OCTAL_LIT - 58)) | (1 << (GoParser.HEX_LIT - 58)) | (1 << (GoParser.FLOAT_LIT - 58)) | (1 << (GoParser.IMAGINARY_LIT - 58)) | (1 << (GoParser.RUNE_LIT - 58)) | (1 << (GoParser.RAW_STRING_LIT - 58)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 58)))) !== 0)) {
				{
				this.state = 990;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 984;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 985;
					this.type_();
					this.state = 988;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
					case 1:
						{
						this.state = 986;
						this.match(GoParser.COMMA);
						this.state = 987;
						this.expressionList();
						}
						break;
					}
					}
					break;
				}
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.ELLIPSIS) {
					{
					this.state = 992;
					this.match(GoParser.ELLIPSIS);
					}
				}

				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.COMMA) {
					{
					this.state = 995;
					this.match(GoParser.COMMA);
					}
				}

				}
			}

			this.state = 1000;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodExpr(): MethodExprContext {
		let _localctx: MethodExprContext = new MethodExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, GoParser.RULE_methodExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1002;
			this.type_();
			this.state = 1003;
			this.match(GoParser.DOT);
			this.state = 1004;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, GoParser.RULE_eos);
		try {
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1006;
				this.match(GoParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1007;
				this.match(GoParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1008;
				this.match(GoParser.EOS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1009;
				if (!(this.closingBracket())) {
					throw this.createFailedPredicateException("this.closingBracket()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 24:
			return this.statementList_sempred(_localctx as StatementListContext, predIndex);

		case 76:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 77:
			return this.primaryExpr_sempred(_localctx as PrimaryExprContext, predIndex);

		case 102:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private statementList_sempred(_localctx: StatementListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.closingBracket();
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpr_sempred(_localctx: PrimaryExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.closingBracket();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03[\u03F7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\xD6\n\x02\f\x02\x0E\x02\xD9" +
		"\v\x02\x03\x02\x03\x02\x03\x02\x05\x02\xDE\n\x02\x03\x02\x03\x02\x07\x02" +
		"\xE2\n\x02\f\x02\x0E\x02\xE5\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xF2\n\x04" +
		"\f\x04\x0E\x04\xF5\v\x04\x03\x04\x05\x04\xF8\n\x04\x03\x05\x05\x05\xFB" +
		"\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u0104\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u010C\n\b\f\b\x0E" +
		"\b\u010F\v\b\x03\b\x05\b\u0112\n\b\x03\t\x03\t\x05\t\u0116\n\t\x03\t\x03" +
		"\t\x05\t\u011A\n\t\x03\n\x03\n\x03\n\x07\n\u011F\n\n\f\n\x0E\n\u0122\v" +
		"\n\x03\v\x03\v\x03\v\x07\v\u0127\n\v\f\v\x0E\v\u012A\v\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x07\f\u0132\n\f\f\f\x0E\f\u0135\v\f\x03\f\x05\f\u0138" +
		"\n\f\x03\r\x03\r\x05\r\u013C\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x05\x0F\u0144\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\u014C\n\x10\f\x10\x0E\x10\u014F\v\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u0159\n\x12\f\x12" +
		"\x0E\x12\u015C\v\x12\x03\x13\x05\x13\u015F\n\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0166\n\x14\x03\x14\x03\x14\x05\x14\u016A\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0171\n\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u017B\n\x17" +
		"\f\x17\x0E\x17\u017E\v\x17\x03\x17\x05\x17\u0181\n\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0187\n\x18\x03\x18\x03\x18\x05\x18\u018B\n\x18" +
		"\x03\x19\x03\x19\x05\x19\u018F\n\x19\x03\x19\x03\x19\x03\x1A\x05\x1A\u0194" +
		"\n\x1A\x03\x1A\x05\x1A\u0197\n\x1A\x03\x1A\x05\x1A\u019A\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x06\x1A\u019F\n\x1A\r\x1A\x0E\x1A\u01A0\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01B2\n\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u01B9\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x05" +
		"!\u01C9\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x05#\u01D4" +
		"\n#\x03$\x03$\x05$\u01D8\n$\x03%\x03%\x05%\u01DC\n%\x03&\x03&\x05&\u01E0" +
		"\n&\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x05*\u01F3\n*\x03*\x03*\x03*\x03*\x05*\u01F9\n*" +
		"\x05*\u01FB\n*\x03+\x03+\x05+\u01FF\n+\x03,\x03,\x05,\u0203\n,\x03,\x05" +
		",\u0206\n,\x03,\x03,\x05,\u020A\n,\x05,\u020C\n,\x03,\x03,\x07,\u0210" +
		"\n,\f,\x0E,\u0213\v,\x03,\x03,\x03-\x03-\x03-\x05-\u021A\n-\x03.\x03." +
		"\x03.\x05.\u021F\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/" +
		"\u022A\n/\x03/\x03/\x07/\u022E\n/\f/\x0E/\u0231\v/\x03/\x03/\x030\x03" +
		"0\x050\u0237\n0\x030\x030\x030\x030\x030\x030\x031\x031\x031\x051\u0242" +
		"\n1\x032\x032\x032\x052\u0247\n2\x033\x033\x053\u024B\n3\x033\x033\x03" +
		"3\x053\u0250\n3\x073\u0252\n3\f3\x0E3\u0255\v3\x034\x034\x034\x074\u025A" +
		"\n4\f4\x0E4\u025D\v4\x034\x034\x035\x035\x035\x055\u0264\n5\x036\x036" +
		"\x036\x056\u0269\n6\x036\x056\u026C\n6\x037\x037\x037\x037\x037\x037\x05" +
		"7\u0274\n7\x037\x037\x038\x038\x058\u027A\n8\x038\x038\x058\u027E\n8\x05" +
		"8\u0280\n8\x038\x038\x039\x059\u0285\n9\x039\x039\x059\u0289\n9\x039\x03" +
		"9\x059\u028D\n9\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0295\n:\x03:\x03:" +
		"\x03:\x03;\x03;\x03;\x03<\x03<\x05<\u029F\n<\x03<\x03<\x03<\x03<\x03<" +
		"\x05<\u02A6\n<\x03=\x03=\x03=\x05=\u02AB\n=\x03=\x03=\x03>\x03>\x05>\u02B1" +
		"\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u02BB\n?\x03@\x03@\x03" +
		"@\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x05" +
		"D\u02CD\nD\x03D\x03D\x07D\u02D1\nD\fD\x0ED\u02D4\vD\x03D\x03D\x03E\x03" +
		"E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x05" +
		"G\u02E7\nG\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u02F1\nH\x03I" +
		"\x03I\x03I\x03J\x03J\x05J\u02F8\nJ\x03K\x03K\x05K\u02FC\nK\x03L\x03L\x03" +
		"L\x03L\x07L\u0302\nL\fL\x0EL\u0305\vL\x03L\x05L\u0308\nL\x05L\u030A\n" +
		"L\x03L\x03L\x03M\x05M\u030F\nM\x03M\x05M\u0312\nM\x03M\x03M\x03N\x03N" +
		"\x03N\x03N\x05N\u031A\nN\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N" +
		"\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u032B\nN\fN\x0EN\u032E\vN\x03O\x03" +
		"O\x03O\x03O\x05O\u0334\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u033D" +
		"\nO\x07O\u033F\nO\fO\x0EO\u0342\vO\x03P\x03P\x03P\x03P\x05P\u0348\nP\x03" +
		"P\x03P\x03Q\x03Q\x03Q\x05Q\u034F\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u0355\nQ" +
		"\x03R\x03R\x03R\x05R\u035A\nR\x03S\x03S\x03S\x03S\x05S\u0360\nS\x03T\x03" +
		"T\x03U\x03U\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x03X\x05X\u0377\nX\x05X\u0379\nX\x03Y\x03Y\x03Y" +
		"\x05Y\u037E\nY\x05Y\u0380\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x07Z\u0387\nZ\f" +
		"Z\x0EZ\u038A\vZ\x03[\x03[\x03[\x05[\u038F\n[\x03[\x03[\x03\\\x03\\\x05" +
		"\\\u0395\n\\\x03]\x03]\x05]\u0399\n]\x03^\x03^\x03^\x03^\x03^\x07^\u03A0" +
		"\n^\f^\x0E^\u03A3\v^\x03^\x03^\x03_\x03_\x03_\x03_\x05_\u03AB\n_\x03_" +
		"\x05_\u03AE\n_\x03`\x03`\x03a\x05a\u03B3\na\x03a\x03a\x05a\u03B7\na\x03" +
		"b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03d\x03d\x05d\u03C3\nd\x03d\x03" +
		"d\x05d\u03C7\nd\x03d\x05d\u03CA\nd\x03d\x03d\x03d\x03d\x03d\x05d\u03D1" +
		"\nd\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x05f\u03DF" +
		"\nf\x05f\u03E1\nf\x03f\x05f\u03E4\nf\x03f\x05f\u03E7\nf\x05f\u03E9\nf" +
		"\x03f\x03f\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x03h\x05h\u03F5\nh\x03h" +
		"\x02\x02\x04\x9A\x9Ci\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C" +
		"\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE" +
		"\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0" +
		"\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\x02\v\x04" +
		"\x02\x1D\x1D((\x03\x02)*\x04\x025:=A\x03\x02<B\x04\x026:@A\x04\x0255=" +
		"?\x03\x02/4\x04\x02CFJK\x03\x02QR\x02\u0438\x02\xD0\x03\x02\x02\x02\x04" +
		"\xE8\x03\x02\x02\x02\x06\xEB\x03\x02\x02\x02\b\xFA\x03\x02\x02\x02\n\xFE" +
		"\x03\x02\x02\x02\f\u0103\x03\x02\x02\x02\x0E\u0105\x03\x02\x02\x02\x10" +
		"\u0113\x03\x02\x02\x02\x12\u011B\x03\x02\x02\x02\x14\u0123\x03\x02\x02" +
		"\x02\x16\u012B\x03\x02\x02\x02\x18\u013B\x03\x02\x02\x02\x1A\u013D\x03" +
		"\x02\x02\x02\x1C\u0141\x03\x02\x02\x02\x1E\u0147\x03\x02\x02\x02 \u0152" +
		"\x03\x02\x02\x02\"\u0155\x03\x02\x02\x02$\u015E\x03\x02\x02\x02&\u0162" +
		"\x03\x02\x02\x02(\u016B\x03\x02\x02\x02*\u0172\x03\x02\x02\x02,\u0174" +
		"\x03\x02\x02\x02.\u0182\x03\x02\x02\x020\u018C\x03\x02\x02\x022\u019E" +
		"\x03\x02\x02\x024\u01B1\x03\x02\x02\x026\u01B8\x03\x02\x02\x028\u01BA" +
		"\x03\x02\x02\x02:\u01BC\x03\x02\x02\x02<\u01C0\x03\x02\x02\x02>\u01C3" +
		"\x03\x02\x02\x02@\u01C8\x03\x02\x02\x02B\u01CC\x03\x02\x02\x02D\u01D0" +
		"\x03\x02\x02\x02F\u01D5\x03\x02\x02\x02H\u01D9\x03\x02\x02\x02J\u01DD" +
		"\x03\x02\x02\x02L\u01E1\x03\x02\x02\x02N\u01E4\x03\x02\x02\x02P\u01E6" +
		"\x03\x02\x02\x02R\u01E9\x03\x02\x02\x02T\u01FE\x03\x02\x02\x02V\u0200" +
		"\x03\x02\x02\x02X\u0216\x03\x02\x02\x02Z\u021E\x03\x02\x02\x02\\\u0220" +
		"\x03\x02\x02\x02^\u0236\x03\x02\x02\x02`\u023E\x03\x02\x02\x02b\u0246" +
		"\x03\x02\x02\x02d\u024A\x03\x02\x02\x02f\u0256\x03\x02\x02\x02h\u0260" +
		"\x03\x02\x02\x02j\u026B\x03\x02\x02\x02l\u0273\x03\x02\x02\x02n\u0277" +
		"\x03\x02\x02\x02p\u0284\x03\x02\x02\x02r\u0294\x03\x02\x02\x02t\u0299" +
		"\x03\x02\x02\x02v\u02A5\x03\x02\x02\x02x\u02A7\x03\x02\x02\x02z\u02B0" +
		"\x03\x02\x02\x02|\u02BA\x03\x02\x02\x02~\u02BC\x03\x02\x02\x02\x80\u02C1" +
		"\x03\x02\x02\x02\x82\u02C3\x03\x02\x02\x02\x84\u02C5\x03\x02\x02\x02\x86" +
		"\u02C8\x03\x02\x02\x02\x88\u02D7\x03\x02\x02\x02\x8A\u02DB\x03\x02\x02" +
		"\x02\x8C\u02E6\x03\x02\x02\x02\x8E\u02F0\x03\x02\x02\x02\x90\u02F2\x03" +
		"\x02\x02\x02\x92\u02F5\x03\x02\x02\x02\x94\u02FB\x03\x02\x02\x02\x96\u02FD" +
		"\x03\x02\x02\x02\x98\u030E\x03\x02\x02\x02\x9A\u0319\x03\x02\x02\x02\x9C" +
		"\u0333\x03\x02\x02\x02\x9E\u0343\x03\x02\x02\x02\xA0\u0354\x03\x02\x02" +
		"\x02\xA2\u0359\x03\x02\x02\x02\xA4\u035F\x03\x02\x02\x02\xA6\u0361\x03" +
		"\x02\x02\x02\xA8\u0363\x03\x02\x02\x02\xAA\u0365\x03\x02\x02\x02\xAC\u0369" +
		"\x03\x02\x02\x02\xAE\u0378\x03\x02\x02\x02\xB0\u037A\x03\x02\x02\x02\xB2" +
		"\u0383\x03\x02\x02\x02\xB4\u038E\x03\x02\x02\x02\xB6\u0394\x03\x02\x02" +
		"\x02\xB8\u0398\x03\x02\x02\x02\xBA\u039A\x03\x02\x02\x02\xBC\u03AA\x03" +
		"\x02\x02\x02\xBE\u03AF\x03\x02\x02\x02\xC0\u03B2\x03\x02\x02\x02\xC2\u03B8" +
		"\x03\x02\x02\x02\xC4\u03BC\x03\x02\x02\x02\xC6\u03C0\x03\x02\x02\x02\xC8" +
		"\u03D4\x03\x02\x02\x02\xCA\u03D9\x03\x02\x02\x02\xCC\u03EC\x03\x02\x02" +
		"\x02\xCE\u03F4\x03\x02\x02\x02\xD0\xD1\x05\x04\x03\x02\xD1\xD7\x05\xCE" +
		"h\x02\xD2\xD3\x05\x06\x04\x02\xD3\xD4\x05\xCEh\x02\xD4\xD6\x03\x02\x02" +
		"\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02" +
		"\x02\xD7\xD8\x03\x02\x02\x02\xD8\xE3\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
		"\x02\xDA\xDE\x05&\x14\x02\xDB\xDE\x05(\x15\x02\xDC\xDE\x05\f\x07\x02\xDD" +
		"\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE" +
		"\xDF\x03\x02\x02\x02\xDF\xE0\x05\xCEh\x02\xE0\xE2\x03\x02\x02\x02\xE1" +
		"\xDD\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6" +
		"\xE7\x07\x02\x02\x03\xE7\x03\x03\x02\x02\x02\xE8\xE9\x07\x10\x02\x02\xE9" +
		"\xEA\x07\x1D\x02\x02\xEA\x05\x03\x02\x02\x02\xEB\xF7\x07\x19\x02\x02\xEC" +
		"\xF8\x05\b\x05\x02\xED\xF3\x07\x1E\x02\x02\xEE\xEF\x05\b\x05\x02\xEF\xF0" +
		"\x05\xCEh\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEE\x03\x02\x02\x02\xF2\xF5" +
		"\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6" +
		"\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF8\x07\x1F\x02\x02\xF7\xEC" +
		"\x03\x02\x02\x02\xF7\xED\x03\x02\x02\x02\xF8\x07\x03\x02\x02\x02\xF9\xFB" +
		"\t\x02\x02\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC" +
		"\x03\x02\x02\x02\xFC\xFD\x05\n\x06\x02\xFD\t\x03\x02\x02\x02\xFE\xFF\x05" +
		"\xBE`\x02\xFF\v\x03\x02\x02\x02\u0100\u0104\x05\x0E\b\x02\u0101\u0104" +
		"\x05\x16\f\x02\u0102\u0104\x05,\x17\x02\u0103\u0100\x03\x02\x02\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\r\x03\x02\x02" +
		"\x02\u0105\u0111\x07\x12\x02\x02\u0106\u0112\x05\x10\t\x02\u0107\u010D" +
		"\x07\x1E\x02\x02\u0108\u0109\x05\x10\t\x02\u0109\u010A\x05\xCEh\x02\u010A" +
		"\u010C\x03\x02\x02\x02\u010B\u0108\x03\x02\x02\x02\u010C\u010F\x03\x02" +
		"\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0110\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0112\x07\x1F" +
		"\x02\x02\u0111\u0106\x03\x02\x02\x02\u0111\u0107\x03\x02\x02\x02\u0112" +
		"\x0F\x03\x02\x02\x02\u0113\u0119\x05\x12\n\x02\u0114\u0116\x05v<\x02\u0115" +
		"\u0114\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02" +
		"\x02\x02\u0117\u0118\x07$\x02\x02\u0118\u011A\x05\x14\v\x02\u0119\u0115" +
		"\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\x11\x03\x02\x02\x02" +
		"\u011B\u0120\x07\x1D\x02\x02\u011C\u011D\x07%\x02\x02\u011D\u011F\x07" +
		"\x1D\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120" +
		"\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\x13\x03\x02\x02" +
		"\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0128\x05\x9AN\x02\u0124\u0125" +
		"\x07%\x02\x02\u0125\u0127\x05\x9AN\x02\u0126\u0124\x03\x02\x02\x02\u0127" +
		"\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02" +
		"\x02\x02\u0129\x15\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u0137" +
		"\x07\x16\x02\x02\u012C\u0138\x05\x18\r\x02\u012D\u0133\x07\x1E\x02\x02" +
		"\u012E\u012F\x05\x18\r\x02\u012F\u0130\x05\xCEh\x02\u0130\u0132\x03\x02" +
		"\x02\x02\u0131\u012E\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0136\x03\x02" +
		"\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0138\x07\x1F\x02\x02\u0137" +
		"\u012C\x03\x02\x02\x02\u0137\u012D\x03\x02\x02\x02\u0138\x17\x03\x02\x02" +
		"\x02\u0139\u013C\x05\x1A\x0E\x02\u013A\u013C\x05\x1C\x0F\x02\u013B\u0139" +
		"\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\x19\x03\x02\x02\x02" +
		"\u013D\u013E\x07\x1D\x02\x02\u013E\u013F\x07$\x02\x02\u013F\u0140\x05" +
		"v<\x02\u0140\x1B\x03\x02\x02\x02\u0141\u0143\x07\x1D\x02\x02\u0142\u0144" +
		"\x05\x1E\x10\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02" +
		"\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x05v<\x02\u0146\x1D\x03\x02\x02" +
		"\x02\u0147\u0148\x07\"\x02\x02\u0148\u014D\x05 \x11\x02\u0149\u014A\x07" +
		"%\x02\x02\u014A\u014C\x05 \x11\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F" +
		"\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
		"\u014E\u0150\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0151\x07" +
		"#\x02\x02\u0151\x1F\x03\x02\x02\x02\u0152\u0153\x05\x12\n\x02\u0153\u0154" +
		"\x05\"\x12\x02\u0154!\x03\x02\x02\x02\u0155\u015A\x05$\x13\x02\u0156\u0157" +
		"\x075\x02\x02\u0157\u0159\x05$\x13\x02\u0158\u0156\x03\x02\x02\x02\u0159" +
		"\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B#\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D\u015F" +
		"\x07;\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x05v<\x02\u0161%\x03\x02\x02" +
		"\x02\u0162\u0163\x07\x05\x02\x02\u0163\u0165\x07\x1D\x02\x02\u0164\u0166" +
		"\x05\x1E\x10\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x05\x92J\x02\u0168\u016A\x05" +
		"0\x19\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		"\'\x03\x02\x02\x02\u016B\u016C\x07\x05\x02\x02\u016C\u016D\x05*\x16\x02" +
		"\u016D\u016E\x07\x1D\x02\x02\u016E\u0170\x05\x92J\x02\u016F\u0171\x05" +
		"0\x19\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
		")\x03\x02\x02\x02\u0172\u0173\x05\x96L\x02\u0173+\x03\x02\x02\x02\u0174" +
		"\u0180\x07\x1B\x02\x02\u0175\u0181\x05.\x18\x02\u0176\u017C\x07\x1E\x02" +
		"\x02\u0177\u0178\x05.\x18\x02\u0178\u0179\x05\xCEh\x02\u0179\u017B\x03" +
		"\x02\x02\x02\u017A\u0177\x03\x02\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C" +
		"\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02" +
		"\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0181\x07\x1F\x02\x02\u0180" +
		"\u0175\x03\x02\x02\x02\u0180\u0176\x03\x02\x02\x02\u0181-\x03\x02\x02" +
		"\x02\u0182\u018A\x05\x12\n\x02\u0183\u0186\x05v<\x02\u0184\u0185\x07$" +
		"\x02\x02\u0185\u0187\x05\x14\v\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187" +
		"\x03\x02\x02\x02\u0187\u018B\x03\x02\x02\x02\u0188\u0189\x07$\x02\x02" +
		"\u0189\u018B\x05\x14\v\x02\u018A\u0183\x03\x02\x02\x02\u018A\u0188\x03" +
		"\x02\x02\x02\u018B/\x03\x02\x02\x02\u018C\u018E\x07 \x02\x02\u018D\u018F" +
		"\x052\x1A\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02" +
		"\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x07!\x02\x02\u01911\x03\x02\x02" +
		"\x02\u0192\u0194\x07&\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194" +
		"\x03\x02\x02\x02\u0194\u019A\x03\x02\x02\x02\u0195\u0197\x07Z\x02\x02" +
		"\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u019A\x03" +
		"\x02\x02\x02\u0198\u019A\x06\x1A\x02\x02\u0199\u0193\x03\x02\x02\x02\u0199" +
		"\u0196\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02" +
		"\x02\x02\u019B\u019C\x054\x1B\x02\u019C\u019D\x05\xCEh\x02\u019D\u019F" +
		"\x03\x02\x02\x02\u019E\u0199\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
		"\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A13\x03\x02" +
		"\x02\x02\u01A2\u01B2\x05\f\x07\x02\u01A3\u01B2\x05D#\x02\u01A4\u01B2\x05" +
		"6\x1C\x02\u01A5\u01B2\x05t;\x02\u01A6\u01B2\x05F$\x02\u01A7\u01B2\x05" +
		"H%\x02\u01A8\u01B2\x05J&\x02\u01A9\u01B2\x05L\'\x02\u01AA\u01B2\x05N(" +
		"\x02\u01AB\u01B2\x050\x19\x02\u01AC\u01B2\x05R*\x02\u01AD\u01B2\x05T+" +
		"\x02\u01AE\u01B2\x05f4\x02\u01AF\u01B2\x05n8\x02\u01B0\u01B2\x05P)\x02" +
		"\u01B1\u01A2\x03\x02\x02\x02\u01B1\u01A3\x03\x02\x02\x02\u01B1\u01A4\x03" +
		"\x02\x02\x02\u01B1\u01A5\x03\x02\x02\x02\u01B1\u01A6\x03\x02\x02\x02\u01B1" +
		"\u01A7\x03\x02\x02\x02\u01B1\u01A8\x03\x02\x02\x02\u01B1\u01A9\x03\x02" +
		"\x02\x02\u01B1\u01AA\x03\x02\x02\x02\u01B1\u01AB\x03\x02\x02\x02\u01B1" +
		"\u01AC\x03\x02\x02\x02\u01B1\u01AD\x03\x02\x02\x02\u01B1\u01AE\x03\x02" +
		"\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2" +
		"5\x03\x02\x02\x02\u01B3\u01B9\x05:\x1E\x02\u01B4\u01B9\x05<\x1F\x02\u01B5" +
		"\u01B9\x05> \x02\u01B6\u01B9\x058\x1D\x02\u01B7\u01B9\x05B\"\x02\u01B8" +
		"\u01B3\x03\x02\x02\x02\u01B8\u01B4\x03\x02\x02\x02\u01B8\u01B5\x03\x02" +
		"\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9" +
		"7\x03\x02\x02\x02\u01BA\u01BB\x05\x9AN\x02\u01BB9\x03\x02\x02\x02\u01BC" +
		"\u01BD\x05\x9AN\x02\u01BD\u01BE\x07B\x02\x02\u01BE\u01BF\x05\x9AN\x02" +
		"\u01BF;\x03\x02\x02\x02\u01C0\u01C1\x05\x9AN\x02\u01C1\u01C2\t\x03\x02" +
		"\x02\u01C2=\x03\x02\x02\x02\u01C3\u01C4\x05\x14\v\x02\u01C4\u01C5\x05" +
		"@!\x02\u01C5\u01C6\x05\x14\v\x02\u01C6?\x03\x02\x02\x02\u01C7\u01C9\t" +
		"\x04\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA\u01CB\x07$\x02\x02\u01CBA\x03\x02\x02\x02" +
		"\u01CC\u01CD\x05\x12\n\x02\u01CD\u01CE\x07+\x02\x02\u01CE\u01CF\x05\x14" +
		"\v\x02\u01CFC\x03\x02\x02\x02\u01D0\u01D1\x07\x1D\x02\x02\u01D1\u01D3" +
		"\x07\'\x02\x02\u01D2\u01D4\x054\x1B\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4E\x03\x02\x02\x02\u01D5\u01D7\x07\x1A\x02" +
		"\x02\u01D6\u01D8\x05\x14\v\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8" +
		"\x03\x02\x02\x02\u01D8G\x03\x02\x02\x02\u01D9\u01DB\x07\x03\x02\x02\u01DA" +
		"\u01DC\x07\x1D\x02\x02\u01DB\u01DA\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DCI\x03\x02\x02\x02\u01DD\u01DF" +
		"\x07\x17\x02\x02\u01DE\u01E0\x07\x1D\x02\x02\u01DF\u01DE\x03\x02\x02\x02" +
		"\u01DF\u01E0\x03\x02\x02\x02\u01E0K\x03\x02\x02\x02\u01E1\u01E2\x07\x0F" +
		"\x02\x02\u01E2\u01E3\x07\x1D\x02\x02\u01E3M\x03\x02\x02\x02\u01E4\u01E5" +
		"\x07\x13\x02\x02\u01E5O\x03\x02\x02\x02\u01E6\u01E7\x07\t\x02\x02\u01E7" +
		"\u01E8\x05\x9AN\x02\u01E8Q\x03\x02\x02\x02\u01E9\u01F2\x07\x14\x02\x02" +
		"\u01EA\u01F3\x05\x9AN\x02\u01EB\u01EC\x05\xCEh\x02\u01EC\u01ED\x05\x9A" +
		"N\x02\u01ED\u01F3\x03\x02\x02\x02\u01EE\u01EF\x056\x1C\x02\u01EF\u01F0" +
		"\x05\xCEh\x02\u01F0\u01F1\x05\x9AN\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2" +
		"\u01EA\x03\x02\x02\x02\u01F2\u01EB\x03\x02\x02\x02\u01F2\u01EE\x03\x02" +
		"\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01FA\x050\x19\x02\u01F5\u01F8" +
		"\x07\x0E\x02\x02\u01F6\u01F9\x05R*\x02\u01F7\u01F9\x050\x19\x02\u01F8" +
		"\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FB\x03\x02" +
		"\x02\x02\u01FA\u01F5\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
		"S\x03\x02\x02\x02\u01FC\u01FF\x05V,\x02\u01FD\u01FF\x05\\/\x02\u01FE\u01FC" +
		"\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FFU\x03\x02\x02\x02\u0200" +
		"\u020B\x07\x11\x02\x02\u0201\u0203\x05\x9AN\x02\u0202\u0201\x03\x02\x02" +
		"\x02\u0202\u0203\x03\x02\x02\x02\u0203\u020C\x03\x02\x02\x02\u0204\u0206" +
		"\x056\x1C\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206\u0207\x03\x02\x02\x02\u0207\u0209\x05\xCEh\x02\u0208\u020A\x05" +
		"\x9AN\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020C\x03\x02\x02\x02\u020B\u0202\x03\x02\x02\x02\u020B\u0205\x03\x02" +
		"\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u0211\x07 \x02\x02\u020E\u0210" +
		"\x05X-\x02\u020F\u020E\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211" +
		"\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0214\x03\x02" +
		"\x02\x02\u0213\u0211\x03\x02\x02\x02\u0214\u0215\x07!\x02\x02\u0215W\x03" +
		"\x02\x02\x02\u0216\u0217\x05Z.\x02\u0217\u0219\x07\'\x02\x02\u0218\u021A" +
		"\x052\x1A\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02" +
		"\u021AY\x03\x02\x02\x02\u021B\u021C\x07\b\x02\x02\u021C\u021F\x05\x14" +
		"\v\x02\u021D\u021F\x07\x04\x02\x02\u021E\u021B\x03\x02\x02\x02\u021E\u021D" +
		"\x03\x02\x02\x02\u021F[\x03\x02\x02\x02\u0220\u0229\x07\x11\x02\x02\u0221" +
		"\u022A\x05^0\x02\u0222\u0223\x05\xCEh\x02\u0223\u0224\x05^0\x02\u0224" +
		"\u022A\x03\x02\x02\x02\u0225\u0226\x056\x1C\x02\u0226\u0227\x05\xCEh\x02" +
		"\u0227\u0228\x05^0\x02\u0228\u022A\x03\x02\x02\x02\u0229\u0221\x03\x02" +
		"\x02\x02\u0229\u0222\x03\x02\x02\x02\u0229\u0225\x03\x02\x02\x02\u022A" +
		"\u022B\x03\x02\x02\x02\u022B\u022F\x07 \x02\x02\u022C\u022E\x05`1\x02" +
		"\u022D\u022C\x03\x02\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03" +
		"\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231" +
		"\u022F\x03\x02\x02\x02\u0232\u0233\x07!\x02\x02\u0233]\x03\x02\x02\x02" +
		"\u0234\u0235\x07\x1D\x02\x02\u0235\u0237\x07+\x02\x02\u0236\u0234\x03" +
		"\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238" +
		"\u0239\x05\x9CO\x02\u0239\u023A\x07(\x02\x02\u023A\u023B\x07\x1E\x02\x02" +
		"\u023B\u023C\x07\x16\x02\x02\u023C\u023D\x07\x1F\x02\x02\u023D_\x03\x02" +
		"\x02\x02\u023E\u023F\x05b2\x02\u023F\u0241\x07\'\x02\x02\u0240\u0242\x05" +
		"2\x1A\x02\u0241\u0240\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242" +
		"a\x03\x02\x02\x02\u0243\u0244\x07\b\x02\x02\u0244\u0247\x05d3\x02\u0245" +
		"\u0247\x07\x04\x02\x02\u0246\u0243\x03\x02\x02\x02\u0246\u0245\x03\x02" +
		"\x02\x02\u0247c\x03\x02\x02\x02\u0248\u024B\x05v<\x02\u0249\u024B\x07" +
		"\x1C\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u0249\x03\x02\x02\x02\u024B" +
		"\u0253\x03\x02\x02\x02\u024C\u024F\x07%\x02\x02\u024D\u0250\x05v<\x02" +
		"\u024E\u0250\x07\x1C\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u024E\x03" +
		"\x02\x02\x02\u0250\u0252\x03\x02\x02\x02\u0251\u024C\x03\x02\x02\x02\u0252" +
		"\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02" +
		"\x02\x02\u0254e\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0256\u0257" +
		"\x07\x07\x02\x02\u0257\u025B\x07 \x02\x02\u0258\u025A\x05h5\x02\u0259" +
		"\u0258\x03\x02\x02\x02\u025A\u025D\x03\x02\x02\x02\u025B\u0259\x03\x02" +
		"\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025E\x03\x02\x02\x02\u025D" +
		"\u025B\x03\x02\x02\x02\u025E\u025F\x07!\x02\x02\u025Fg\x03\x02\x02\x02" +
		"\u0260\u0261\x05j6\x02\u0261\u0263\x07\'\x02\x02\u0262\u0264\x052\x1A" +
		"\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264i\x03" +
		"\x02\x02\x02\u0265\u0268\x07\b\x02\x02\u0266\u0269\x05:\x1E\x02\u0267" +
		"\u0269\x05l7\x02\u0268\u0266\x03\x02\x02\x02\u0268\u0267\x03\x02\x02\x02" +
		"\u0269\u026C\x03\x02\x02\x02\u026A\u026C\x07\x04\x02\x02\u026B\u0265\x03" +
		"\x02\x02\x02\u026B\u026A\x03\x02\x02\x02\u026Ck\x03\x02\x02\x02\u026D" +
		"\u026E\x05\x14\v\x02\u026E\u026F\x07$\x02\x02\u026F\u0274\x03\x02\x02" +
		"\x02\u0270\u0271\x05\x12\n\x02\u0271\u0272\x07+\x02\x02\u0272\u0274\x03" +
		"\x02\x02\x02\u0273\u026D\x03\x02\x02\x02\u0273\u0270\x03\x02\x02\x02\u0273" +
		"\u0274\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x05\x9A" +
		"N\x02\u0276m\x03\x02\x02\x02\u0277\u027F\x07\x18\x02\x02\u0278\u027A\x05" +
		"\x9AN\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"\u0280\x03\x02\x02\x02\u027B\u0280\x05p9\x02\u027C\u027E\x05r:\x02\u027D" +
		"\u027C\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02" +
		"\x02\x02\u027F\u0279\x03\x02\x02\x02\u027F\u027B\x03\x02\x02\x02\u027F" +
		"\u027D\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x050\x19" +
		"\x02\u0282o\x03\x02\x02\x02\u0283\u0285\x056\x1C\x02\u0284\u0283\x03\x02" +
		"\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286" +
		"\u0288\x05\xCEh\x02\u0287\u0289\x05\x9AN\x02\u0288\u0287\x03\x02\x02\x02" +
		"\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x05" +
		"\xCEh\x02\u028B\u028D\x056\x1C\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D" +
		"\x03\x02\x02\x02\u028Dq\x03\x02\x02\x02\u028E\u028F\x05\x14\v\x02\u028F" +
		"\u0290\x07$\x02\x02\u0290\u0295\x03\x02\x02\x02\u0291\u0292\x05\x12\n" +
		"\x02\u0292\u0293\x07+\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294\u028E" +
		"\x03\x02\x02\x02\u0294\u0291\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x07\x15\x02\x02\u0297\u0298\x05" +
		"\x9AN\x02\u0298s\x03\x02\x02\x02\u0299\u029A\x07\n\x02\x02\u029A\u029B" +
		"\x05\x9AN\x02\u029Bu\x03\x02\x02\x02\u029C\u029E\x05z>\x02\u029D\u029F" +
		"\x05x=\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
		"\u02A6\x03\x02\x02\x02\u02A0\u02A6\x05|?\x02\u02A1\u02A2\x07\x1E\x02\x02" +
		"\u02A2\u02A3\x05v<\x02\u02A3\u02A4\x07\x1F\x02\x02\u02A4\u02A6\x03\x02" +
		"\x02\x02\u02A5\u029C\x03\x02\x02\x02\u02A5\u02A0\x03\x02\x02\x02\u02A5" +
		"\u02A1\x03\x02\x02\x02\u02A6w\x03\x02\x02\x02\u02A7\u02A8\x07\"\x02\x02" +
		"\u02A8\u02AA\x05d3\x02\u02A9\u02AB\x07%\x02\x02\u02AA\u02A9\x03\x02\x02" +
		"\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD" +
		"\x07#\x02\x02\u02ADy\x03\x02\x02\x02\u02AE\u02B1\x05\xAAV\x02\u02AF\u02B1" +
		"\x07\x1D\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02" +
		"\u02B1{\x03\x02\x02\x02\u02B2\u02BB\x05~@\x02\u02B3\u02BB\x05\xBA^\x02" +
		"\u02B4\u02BB\x05\x84C\x02\u02B5\u02BB\x05\x90I\x02\u02B6\u02BB\x05\x86" +
		"D\x02\u02B7\u02BB\x05\x88E\x02\u02B8\u02BB\x05\x8AF\x02\u02B9\u02BB\x05" +
		"\x8CG\x02\u02BA\u02B2\x03\x02\x02\x02\u02BA\u02B3\x03\x02\x02\x02\u02BA" +
		"\u02B4\x03\x02\x02\x02\u02BA\u02B5\x03\x02\x02\x02\u02BA\u02B6\x03\x02" +
		"\x02\x02\u02BA\u02B7\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA" +
		"\u02B9\x03\x02\x02\x02\u02BB}\x03\x02\x02\x02\u02BC\u02BD\x07\"\x02\x02" +
		"\u02BD\u02BE\x05\x80A\x02\u02BE\u02BF\x07#\x02\x02\u02BF\u02C0\x05\x82" +
		"B\x02\u02C0\x7F\x03\x02\x02\x02\u02C1\u02C2\x05\x9AN\x02\u02C2\x81\x03" +
		"\x02\x02\x02\u02C3\u02C4\x05v<\x02\u02C4\x83\x03\x02\x02\x02\u02C5\u02C6" +
		"\x07@\x02\x02\u02C6\u02C7\x05v<\x02\u02C7\x85\x03\x02\x02\x02\u02C8\u02C9" +
		"\x07\x06\x02\x02\u02C9\u02D2\x07 \x02\x02\u02CA\u02CD\x05\x8EH\x02\u02CB" +
		"\u02CD\x05\"\x12\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CB\x03\x02\x02" +
		"\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x05\xCEh\x02\u02CF\u02D1" +
		"\x03\x02\x02\x02\u02D0\u02CC\x03\x02\x02\x02\u02D1\u02D4\x03\x02\x02\x02" +
		"\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D5\x03" +
		"\x02\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D5\u02D6\x07!\x02\x02\u02D6" +
		"\x87\x03\x02\x02\x02\u02D7\u02D8\x07\"\x02\x02\u02D8\u02D9\x07#\x02\x02" +
		"\u02D9\u02DA\x05\x82B\x02\u02DA\x89\x03\x02\x02\x02\u02DB\u02DC\x07\v" +
		"\x02\x02\u02DC\u02DD\x07\"\x02\x02\u02DD\u02DE\x05v<\x02\u02DE\u02DF\x07" +
		"#\x02\x02\u02DF\u02E0\x05\x82B\x02\u02E0\x8B\x03\x02\x02\x02\u02E1\u02E7" +
		"\x07\r\x02\x02\u02E2\u02E3\x07\r\x02\x02\u02E3\u02E7\x07B\x02\x02\u02E4" +
		"\u02E5\x07B\x02\x02\u02E5\u02E7\x07\r\x02\x02\u02E6\u02E1\x03\x02\x02" +
		"\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02E8" +
		"\x03\x02\x02\x02\u02E8\u02E9\x05\x82B\x02\u02E9\x8D\x03\x02\x02\x02\u02EA" +
		"\u02EB\x07\x1D\x02\x02\u02EB\u02EC\x05\x96L\x02\u02EC\u02ED\x05\x94K\x02" +
		"\u02ED\u02F1\x03\x02\x02\x02\u02EE\u02EF\x07\x1D\x02\x02\u02EF\u02F1\x05" +
		"\x96L\x02\u02F0\u02EA\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1" +
		"\x8F\x03\x02\x02\x02\u02F2\u02F3\x07\x05\x02\x02\u02F3\u02F4\x05\x92J" +
		"\x02\u02F4\x91\x03\x02\x02\x02\u02F5\u02F7\x05\x96L\x02\u02F6\u02F8\x05" +
		"\x94K\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8" +
		"\x93\x03\x02\x02\x02\u02F9\u02FC\x05\x96L\x02\u02FA\u02FC\x05v<\x02\u02FB" +
		"\u02F9\x03\x02\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FC\x95\x03\x02\x02" +
		"\x02\u02FD\u0309\x07\x1E\x02\x02\u02FE\u0303\x05\x98M\x02\u02FF\u0300" +
		"\x07%\x02\x02\u0300\u0302\x05\x98M\x02\u0301\u02FF\x03\x02\x02\x02\u0302" +
		"\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02" +
		"\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306" +
		"\u0308\x07%\x02\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02" +
		"\x02\u0308\u030A\x03\x02\x02\x02\u0309\u02FE\x03\x02\x02\x02\u0309\u030A" +
		"\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x07\x1F\x02\x02" +
		"\u030C\x97\x03\x02\x02\x02\u030D\u030F\x05\x12\n\x02\u030E\u030D\x03\x02" +
		"\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0311\x03\x02\x02\x02\u0310" +
		"\u0312\x07,\x02\x02\u0311\u0310\x03\x02\x02\x02\u0311\u0312\x03\x02\x02" +
		"\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x05v<\x02\u0314\x99\x03\x02" +
		"\x02\x02\u0315\u0316\bN\x01\x02\u0316\u031A\x05\x9CO\x02\u0317\u0318\t" +
		"\x05\x02\x02\u0318\u031A\x05\x9AN\b\u0319\u0315\x03\x02\x02\x02\u0319" +
		"\u0317\x03\x02\x02\x02\u031A\u032C\x03\x02\x02\x02\u031B\u031C\f\x07\x02" +
		"\x02\u031C\u031D\t\x06\x02\x02\u031D\u032B\x05\x9AN\b\u031E\u031F\f\x06" +
		"\x02\x02\u031F\u0320\t\x07\x02\x02\u0320\u032B\x05\x9AN\x07\u0321\u0322" +
		"\f\x05\x02\x02\u0322\u0323\t\b\x02\x02\u0323\u032B\x05\x9AN\x06\u0324" +
		"\u0325\f\x04\x02\x02\u0325\u0326\x07.\x02\x02\u0326\u032B\x05\x9AN\x05" +
		"\u0327\u0328\f\x03\x02\x02\u0328\u0329\x07-\x02\x02\u0329\u032B\x05\x9A" +
		"N\x04\u032A\u031B\x03\x02\x02\x02\u032A\u031E\x03\x02\x02\x02\u032A\u0321" +
		"\x03\x02\x02\x02\u032A\u0324\x03\x02\x02\x02\u032A\u0327\x03\x02\x02\x02" +
		"\u032B\u032E\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C\u032D\x03" +
		"\x02\x02\x02\u032D\x9B\x03\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032F" +
		"\u0330\bO\x01\x02\u0330\u0334\x05\xA0Q\x02\u0331\u0334\x05\x9EP\x02\u0332" +
		"\u0334\x05\xCCg\x02\u0333\u032F\x03\x02\x02\x02\u0333\u0331\x03\x02\x02" +
		"\x02\u0333\u0332\x03\x02\x02\x02\u0334\u0340\x03\x02\x02\x02\u0335\u033C" +
		"\f\x03\x02\x02\u0336\u0337\x07(\x02\x02\u0337\u033D\x07\x1D\x02\x02\u0338" +
		"\u033D\x05\xC4c\x02\u0339\u033D\x05\xC6d\x02\u033A\u033D\x05\xC8e\x02" +
		"\u033B\u033D\x05\xCAf\x02\u033C\u0336\x03\x02\x02\x02\u033C\u0338\x03" +
		"\x02\x02\x02\u033C\u0339\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
		"\u033B\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u0335\x03\x02" +
		"\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0340" +
		"\u0341\x03\x02\x02\x02\u0341\x9D\x03\x02\x02\x02\u0342\u0340\x03\x02\x02" +
		"\x02\u0343\u0344\x05v<\x02\u0344\u0345\x07\x1E\x02\x02\u0345\u0347\x05" +
		"\x9AN\x02\u0346\u0348\x07%\x02\x02\u0347\u0346\x03\x02\x02\x02\u0347\u0348" +
		"\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x07\x1F\x02\x02" +
		"\u034A\x9F\x03\x02\x02\x02\u034B\u0355\x05\xA2R\x02\u034C\u034E\x05\xA8" +
		"U\x02\u034D\u034F\x05x=\x02\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03" +
		"\x02\x02\x02\u034F\u0355\x03\x02\x02\x02\u0350\u0351\x07\x1E\x02\x02\u0351" +
		"\u0352\x05\x9AN\x02\u0352\u0353\x07\x1F\x02\x02\u0353\u0355\x03\x02\x02" +
		"\x02\u0354\u034B\x03\x02\x02\x02\u0354\u034C\x03\x02\x02\x02\u0354\u0350" +
		"\x03\x02\x02\x02\u0355\xA1\x03\x02\x02\x02\u0356\u035A\x05\xA4S\x02\u0357" +
		"\u035A\x05\xACW\x02\u0358\u035A\x05\xC2b\x02\u0359\u0356\x03\x02\x02\x02" +
		"\u0359\u0357\x03\x02\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A\xA3\x03" +
		"\x02\x02\x02\u035B\u0360\x07\x1C\x02\x02\u035C\u0360\x05\xA6T\x02\u035D" +
		"\u0360\x05\xBE`\x02\u035E\u0360\x07G\x02\x02\u035F\u035B\x03\x02\x02\x02" +
		"\u035F\u035C\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F\u035E\x03" +
		"\x02\x02\x02\u0360\xA5\x03\x02\x02\x02\u0361\u0362\t\t\x02\x02\u0362\xA7" +
		"\x03\x02\x02\x02\u0363\u0364\x07\x1D\x02\x02\u0364\xA9\x03\x02\x02\x02" +
		"\u0365\u0366\x07\x1D\x02\x02\u0366\u0367\x07(\x02\x02\u0367\u0368\x07" +
		"\x1D\x02\x02\u0368\xAB\x03\x02\x02\x02\u0369\u036A\x05\xAEX\x02\u036A" +
		"\u036B\x05\xB0Y\x02\u036B\xAD\x03\x02\x02\x02\u036C\u0379\x05\xBA^\x02" +
		"\u036D\u0379\x05~@\x02\u036E\u036F\x07\"\x02\x02\u036F\u0370\x07,\x02" +
		"\x02\u0370\u0371\x07#\x02\x02\u0371\u0379\x05\x82B\x02\u0372\u0379\x05" +
		"\x88E\x02\u0373\u0379\x05\x8AF\x02\u0374\u0376\x05z>\x02\u0375\u0377\x05" +
		"x=\x02\u0376\u0375\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377\u0379" +
		"\x03\x02\x02\x02\u0378\u036C\x03\x02\x02\x02\u0378\u036D\x03\x02\x02\x02" +
		"\u0378\u036E\x03\x02\x02\x02\u0378\u0372\x03\x02\x02\x02\u0378\u0373\x03" +
		"\x02\x02\x02\u0378\u0374\x03\x02\x02\x02\u0379\xAF\x03\x02\x02\x02\u037A" +
		"\u037F\x07 \x02\x02\u037B\u037D\x05\xB2Z\x02\u037C\u037E\x07%\x02\x02" +
		"\u037D\u037C\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0380\x03" +
		"\x02\x02\x02\u037F\u037B\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380" +
		"\u0381\x03\x02\x02\x02\u0381\u0382\x07!\x02\x02\u0382\xB1\x03\x02\x02" +
		"\x02\u0383\u0388\x05\xB4[\x02\u0384\u0385\x07%\x02\x02\u0385\u0387\x05" +
		"\xB4[\x02\u0386\u0384\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388" +
		"\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\xB3\x03\x02\x02" +
		"\x02\u038A\u0388\x03\x02\x02\x02\u038B\u038C\x05\xB6\\\x02\u038C\u038D" +
		"\x07\'\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u038B\x03\x02\x02\x02" +
		"\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x05" +
		"\xB8]\x02\u0391\xB5\x03\x02\x02\x02\u0392\u0395\x05\x9AN\x02\u0393\u0395" +
		"\x05\xB0Y\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0393\x03\x02\x02\x02" +
		"\u0395\xB7\x03\x02\x02\x02\u0396\u0399\x05\x9AN\x02\u0397\u0399\x05\xB0" +
		"Y\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02\u0399\xB9" +
		"\x03\x02\x02\x02\u039A\u039B\x07\f\x02\x02\u039B\u03A1\x07 \x02\x02\u039C" +
		"\u039D\x05\xBC_\x02\u039D\u039E\x05\xCEh\x02\u039E\u03A0\x03\x02\x02\x02" +
		"\u039F\u039C\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02\u03A1\u039F\x03" +
		"\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A4\x03\x02\x02\x02\u03A3" +
		"\u03A1\x03\x02\x02\x02\u03A4\u03A5\x07!\x02\x02\u03A5\xBB\x03\x02\x02" +
		"\x02\u03A6\u03A7\x05\x12\n\x02\u03A7\u03A8\x05v<\x02\u03A8\u03AB\x03\x02" +
		"\x02\x02\u03A9\u03AB\x05\xC0a\x02\u03AA\u03A6\x03\x02\x02\x02\u03AA\u03A9" +
		"\x03\x02\x02\x02\u03AB\u03AD\x03\x02\x02\x02\u03AC\u03AE\x05\xBE`\x02" +
		"\u03AD\u03AC\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\xBD\x03" +
		"\x02\x02\x02\u03AF\u03B0\t\n\x02\x02\u03B0\xBF\x03\x02\x02\x02\u03B1\u03B3" +
		"\x07@\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02" +
		"\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x05z>\x02\u03B5\u03B7\x05x=\x02" +
		"\u03B6\u03B5\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\xC1\x03" +
		"\x02\x02\x02\u03B8\u03B9\x07\x05\x02\x02\u03B9\u03BA\x05\x92J\x02\u03BA" +
		"\u03BB\x050\x19\x02\u03BB\xC3\x03\x02\x02\x02\u03BC\u03BD\x07\"\x02\x02" +
		"\u03BD\u03BE\x05\x9AN\x02\u03BE\u03BF\x07#\x02\x02\u03BF\xC5\x03\x02\x02" +
		"\x02\u03C0\u03D0\x07\"\x02\x02\u03C1\u03C3\x05\x9AN\x02\u03C2\u03C1\x03" +
		"\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C6\x07\'\x02\x02\u03C5\u03C7\x05\x9AN\x02\u03C6\u03C5\x03\x02\x02" +
		"\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03D1\x03\x02\x02\x02\u03C8\u03CA" +
		"\x05\x9AN\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
		"\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CC\x07\'\x02\x02\u03CC\u03CD\x05" +
		"\x9AN\x02\u03CD\u03CE\x07\'\x02\x02\u03CE\u03CF\x05\x9AN\x02\u03CF\u03D1" +
		"\x03\x02\x02\x02\u03D0\u03C2\x03\x02\x02\x02\u03D0\u03C9\x03\x02\x02\x02" +
		"\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D3\x07#\x02\x02\u03D3\xC7\x03\x02" +
		"\x02\x02\u03D4\u03D5\x07(\x02\x02\u03D5\u03D6\x07\x1E\x02\x02\u03D6\u03D7" +
		"\x05v<\x02\u03D7\u03D8\x07\x1F\x02\x02\u03D8\xC9\x03\x02\x02\x02\u03D9" +
		"\u03E8\x07\x1E\x02\x02\u03DA\u03E1\x05\x14\v\x02\u03DB\u03DE\x05v<\x02" +
		"\u03DC\u03DD\x07%\x02\x02\u03DD\u03DF\x05\x14\v\x02\u03DE\u03DC\x03\x02" +
		"\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E1\x03\x02\x02\x02\u03E0" +
		"\u03DA\x03\x02\x02\x02\u03E0\u03DB\x03\x02\x02\x02\u03E1\u03E3\x03\x02" +
		"\x02\x02\u03E2\u03E4\x07,\x02\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4" +
		"\x03\x02\x02\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03E7\x07%\x02\x02" +
		"\u03E6\u03E5\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E9\x03" +
		"\x02\x02\x02\u03E8\u03E0\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9" +
		"\u03EA\x03\x02\x02\x02\u03EA\u03EB\x07\x1F\x02\x02\u03EB\xCB\x03\x02\x02" +
		"\x02\u03EC\u03ED\x05v<\x02\u03ED\u03EE\x07(\x02\x02\u03EE\u03EF\x07\x1D" +
		"\x02\x02\u03EF\xCD\x03\x02\x02\x02\u03F0\u03F5\x07&\x02\x02\u03F1\u03F5" +
		"\x07\x02\x02\x03\u03F2\u03F5\x07Z\x02\x02\u03F3\u03F5\x06h\t\x02\u03F4" +
		"\u03F0\x03\x02\x02\x02\u03F4\u03F1\x03\x02\x02\x02\u03F4\u03F2\x03\x02" +
		"\x02\x02\u03F4\u03F3\x03\x02\x02\x02\u03F5\xCF\x03\x02\x02\x02z\xD7\xDD" +
		"\xE3\xF3\xF7\xFA\u0103\u010D\u0111\u0115\u0119\u0120\u0128\u0133\u0137" +
		"\u013B\u0143\u014D\u015A\u015E\u0165\u0169\u0170\u017C\u0180\u0186\u018A" +
		"\u018E\u0193\u0196\u0199\u01A0\u01B1\u01B8\u01C8\u01D3\u01D7\u01DB\u01DF" +
		"\u01F2\u01F8\u01FA\u01FE\u0202\u0205\u0209\u020B\u0211\u0219\u021E\u0229" +
		"\u022F\u0236\u0241\u0246\u024A\u024F\u0253\u025B\u0263\u0268\u026B\u0273" +
		"\u0279\u027D\u027F\u0284\u0288\u028C\u0294\u029E\u02A5\u02AA\u02B0\u02BA" +
		"\u02CC\u02D2\u02E6\u02F0\u02F7\u02FB\u0303\u0307\u0309\u030E\u0311\u0319" +
		"\u032A\u032C\u0333\u033C\u0340\u0347\u034E\u0354\u0359\u035F\u0376\u0378" +
		"\u037D\u037F\u0388\u038E\u0394\u0398\u03A1\u03AA\u03AD\u03B2\u03B6\u03C2" +
		"\u03C6\u03C9\u03D0\u03DE\u03E0\u03E3\u03E6\u03E8\u03F4";
	public static readonly _serializedATN: string = Utils.join(
		[
			GoParser._serializedATNSegment0,
			GoParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GoParser.__ATN) {
			GoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GoParser._serializedATN));
		}

		return GoParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public packageClause(): PackageClauseContext {
		return this.getRuleContext(0, PackageClauseContext);
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(GoParser.EOF, 0); }
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public functionDecl(): FunctionDeclContext[];
	public functionDecl(i: number): FunctionDeclContext;
	public functionDecl(i?: number): FunctionDeclContext | FunctionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclContext);
		} else {
			return this.getRuleContext(i, FunctionDeclContext);
		}
	}
	public methodDecl(): MethodDeclContext[];
	public methodDecl(i: number): MethodDeclContext;
	public methodDecl(i?: number): MethodDeclContext | MethodDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclContext);
		} else {
			return this.getRuleContext(i, MethodDeclContext);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageClauseContext extends ParserRuleContext {
	public _packageName!: Token;
	public PACKAGE(): TerminalNode { return this.getToken(GoParser.PACKAGE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_packageClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterPackageClause) {
			listener.enterPackageClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitPackageClause) {
			listener.exitPackageClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitPackageClause) {
			return visitor.visitPackageClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(GoParser.IMPORT, 0); }
	public importSpec(): ImportSpecContext[];
	public importSpec(i: number): ImportSpecContext;
	public importSpec(i?: number): ImportSpecContext | ImportSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportSpecContext);
		} else {
			return this.getRuleContext(i, ImportSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitImportDecl) {
			return visitor.visitImportDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSpecContext extends ParserRuleContext {
	public _alias!: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_importSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterImportSpec) {
			listener.enterImportSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitImportSpec) {
			listener.exitImportSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitImportSpec) {
			return visitor.visitImportSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_importPath; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public constDecl(): ConstDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclContext);
	}
	public typeDecl(): TypeDeclContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_declaration; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(GoParser.CONST, 0); }
	public constSpec(): ConstSpecContext[];
	public constSpec(i: number): ConstSpecContext;
	public constSpec(i?: number): ConstSpecContext | ConstSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSpecContext);
		} else {
			return this.getRuleContext(i, ConstSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_constDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterConstDecl) {
			listener.enterConstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitConstDecl) {
			listener.exitConstDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitConstDecl) {
			return visitor.visitConstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_constSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterConstSpec) {
			listener.enterConstSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitConstSpec) {
			listener.exitConstSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitConstSpec) {
			return visitor.visitConstSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.IDENTIFIER);
		} else {
			return this.getToken(GoParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(GoParser.TYPE, 0); }
	public typeSpec(): TypeSpecContext[];
	public typeSpec(i: number): TypeSpecContext;
	public typeSpec(i?: number): TypeSpecContext | TypeSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecContext);
		} else {
			return this.getRuleContext(i, TypeSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeDecl) {
			listener.enterTypeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeDecl) {
			listener.exitTypeDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeDecl) {
			return visitor.visitTypeDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecContext extends ParserRuleContext {
	public aliasDecl(): AliasDeclContext | undefined {
		return this.tryGetRuleContext(0, AliasDeclContext);
	}
	public typeDef(): TypeDefContext | undefined {
		return this.tryGetRuleContext(0, TypeDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeSpec) {
			return visitor.visitTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(GoParser.ASSIGN, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_aliasDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterAliasDecl) {
			listener.enterAliasDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitAliasDecl) {
			listener.exitAliasDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitAliasDecl) {
			return visitor.visitAliasDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeDef; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeDef) {
			listener.enterTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeDef) {
			listener.exitTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeDef) {
			return visitor.visitTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public typeParameterDecl(): TypeParameterDeclContext[];
	public typeParameterDecl(i: number): TypeParameterDeclContext;
	public typeParameterDecl(i?: number): TypeParameterDeclContext | TypeParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterDeclContext);
		} else {
			return this.getRuleContext(i, TypeParameterDeclContext);
		}
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public typeElement(): TypeElementContext {
		return this.getRuleContext(0, TypeElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeParameterDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeParameterDecl) {
			listener.enterTypeParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeParameterDecl) {
			listener.exitTypeParameterDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterDecl) {
			return visitor.visitTypeParameterDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeElementContext extends ParserRuleContext {
	public typeTerm(): TypeTermContext[];
	public typeTerm(i: number): TypeTermContext;
	public typeTerm(i?: number): TypeTermContext | TypeTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTermContext);
		} else {
			return this.getRuleContext(i, TypeTermContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.OR);
		} else {
			return this.getToken(GoParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeElement; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeElement) {
			listener.enterTypeElement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeElement) {
			listener.exitTypeElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeElement) {
			return visitor.visitTypeElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTermContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public UNDERLYING(): TerminalNode | undefined { return this.tryGetToken(GoParser.UNDERLYING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeTerm; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeTerm) {
			listener.enterTypeTerm(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeTerm) {
			listener.exitTypeTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeTerm) {
			return visitor.visitTypeTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public receiver(): ReceiverContext {
		return this.getRuleContext(0, ReceiverContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitMethodDecl) {
			return visitor.visitMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_receiver; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterReceiver) {
			listener.enterReceiver(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitReceiver) {
			listener.exitReceiver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitReceiver) {
			return visitor.visitReceiver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(GoParser.VAR, 0); }
	public varSpec(): VarSpecContext[];
	public varSpec(i: number): VarSpecContext;
	public varSpec(i?: number): VarSpecContext | VarSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSpecContext);
		} else {
			return this.getRuleContext(i, VarSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_varSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterVarSpec) {
			listener.enterVarSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitVarSpec) {
			listener.exitVarSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitVarSpec) {
			return visitor.visitVarSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_block; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.SEMI);
		} else {
			return this.getToken(GoParser.SEMI, i);
		}
	}
	public EOS(): TerminalNode[];
	public EOS(i: number): TerminalNode;
	public EOS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.EOS);
		} else {
			return this.getToken(GoParser.EOS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_statementList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public labeledStmt(): LabeledStmtContext | undefined {
		return this.tryGetRuleContext(0, LabeledStmtContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public goStmt(): GoStmtContext | undefined {
		return this.tryGetRuleContext(0, GoStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public breakStmt(): BreakStmtContext | undefined {
		return this.tryGetRuleContext(0, BreakStmtContext);
	}
	public continueStmt(): ContinueStmtContext | undefined {
		return this.tryGetRuleContext(0, ContinueStmtContext);
	}
	public gotoStmt(): GotoStmtContext | undefined {
		return this.tryGetRuleContext(0, GotoStmtContext);
	}
	public fallthroughStmt(): FallthroughStmtContext | undefined {
		return this.tryGetRuleContext(0, FallthroughStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public switchStmt(): SwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, SwitchStmtContext);
	}
	public selectStmt(): SelectStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public deferStmt(): DeferStmtContext | undefined {
		return this.tryGetRuleContext(0, DeferStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_statement; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public sendStmt(): SendStmtContext | undefined {
		return this.tryGetRuleContext(0, SendStmtContext);
	}
	public incDecStmt(): IncDecStmtContext | undefined {
		return this.tryGetRuleContext(0, IncDecStmtContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public shortVarDecl(): ShortVarDeclContext | undefined {
		return this.tryGetRuleContext(0, ShortVarDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSimpleStmt) {
			return visitor.visitSimpleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SendStmtContext extends ParserRuleContext {
	public _channel!: ExpressionContext;
	public RECEIVE(): TerminalNode { return this.getToken(GoParser.RECEIVE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_sendStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSendStmt) {
			listener.enterSendStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSendStmt) {
			listener.exitSendStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSendStmt) {
			return visitor.visitSendStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncDecStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS_PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS_PLUS, 0); }
	public MINUS_MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS_MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_incDecStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIncDecStmt) {
			listener.enterIncDecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIncDecStmt) {
			listener.exitIncDecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitIncDecStmt) {
			return visitor.visitIncDecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	public assign_op(): Assign_opContext {
		return this.getRuleContext(0, Assign_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_assignment; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assign_opContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode { return this.getToken(GoParser.ASSIGN, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(GoParser.OR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(GoParser.CARET, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(GoParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(GoParser.MOD, 0); }
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RSHIFT, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(GoParser.AMPERSAND, 0); }
	public BIT_CLEAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.BIT_CLEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_assign_op; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterAssign_op) {
			listener.enterAssign_op(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitAssign_op) {
			listener.exitAssign_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitAssign_op) {
			return visitor.visitAssign_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShortVarDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode { return this.getToken(GoParser.DECLARE_ASSIGN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_shortVarDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterShortVarDecl) {
			listener.enterShortVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitShortVarDecl) {
			listener.exitShortVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitShortVarDecl) {
			return visitor.visitShortVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_labeledStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLabeledStmt) {
			listener.enterLabeledStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLabeledStmt) {
			listener.exitLabeledStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitLabeledStmt) {
			return visitor.visitLabeledStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(GoParser.RETURN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(GoParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_breakStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterBreakStmt) {
			listener.enterBreakStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitBreakStmt) {
			listener.exitBreakStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitBreakStmt) {
			return visitor.visitBreakStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(GoParser.CONTINUE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_continueStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterContinueStmt) {
			listener.enterContinueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitContinueStmt) {
			listener.exitContinueStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitContinueStmt) {
			return visitor.visitContinueStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GotoStmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(GoParser.GOTO, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_gotoStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterGotoStmt) {
			listener.enterGotoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitGotoStmt) {
			listener.exitGotoStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitGotoStmt) {
			return visitor.visitGotoStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FallthroughStmtContext extends ParserRuleContext {
	public FALLTHROUGH(): TerminalNode { return this.getToken(GoParser.FALLTHROUGH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_fallthroughStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFallthroughStmt) {
			listener.enterFallthroughStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFallthroughStmt) {
			listener.exitFallthroughStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitFallthroughStmt) {
			return visitor.visitFallthroughStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeferStmtContext extends ParserRuleContext {
	public DEFER(): TerminalNode { return this.getToken(GoParser.DEFER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_deferStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterDeferStmt) {
			listener.enterDeferStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitDeferStmt) {
			listener.exitDeferStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitDeferStmt) {
			return visitor.visitDeferStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(GoParser.IF, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELSE, 0); }
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStmtContext extends ParserRuleContext {
	public exprSwitchStmt(): ExprSwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprSwitchStmtContext);
	}
	public typeSwitchStmt(): TypeSwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, TypeSwitchStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_switchStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSwitchStmt) {
			listener.enterSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSwitchStmt) {
			listener.exitSwitchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSwitchStmt) {
			return visitor.visitSwitchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprSwitchStmtContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(GoParser.SWITCH, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public exprCaseClause(): ExprCaseClauseContext[];
	public exprCaseClause(i: number): ExprCaseClauseContext;
	public exprCaseClause(i?: number): ExprCaseClauseContext | ExprCaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprCaseClauseContext);
		} else {
			return this.getRuleContext(i, ExprCaseClauseContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_exprSwitchStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExprSwitchStmt) {
			listener.enterExprSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExprSwitchStmt) {
			listener.exitExprSwitchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitExprSwitchStmt) {
			return visitor.visitExprSwitchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprCaseClauseContext extends ParserRuleContext {
	public exprSwitchCase(): ExprSwitchCaseContext {
		return this.getRuleContext(0, ExprSwitchCaseContext);
	}
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_exprCaseClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExprCaseClause) {
			listener.enterExprCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExprCaseClause) {
			listener.exitExprCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitExprCaseClause) {
			return visitor.visitExprCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprSwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GoParser.CASE, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_exprSwitchCase; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExprSwitchCase) {
			listener.enterExprSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExprSwitchCase) {
			listener.exitExprSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitExprSwitchCase) {
			return visitor.visitExprSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSwitchStmtContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(GoParser.SWITCH, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public typeSwitchGuard(): TypeSwitchGuardContext | undefined {
		return this.tryGetRuleContext(0, TypeSwitchGuardContext);
	}
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public typeCaseClause(): TypeCaseClauseContext[];
	public typeCaseClause(i: number): TypeCaseClauseContext;
	public typeCaseClause(i?: number): TypeCaseClauseContext | TypeCaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeCaseClauseContext);
		} else {
			return this.getRuleContext(i, TypeCaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSwitchStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSwitchStmt) {
			listener.enterTypeSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSwitchStmt) {
			listener.exitTypeSwitchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeSwitchStmt) {
			return visitor.visitTypeSwitchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSwitchGuardContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext {
		return this.getRuleContext(0, PrimaryExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public TYPE(): TerminalNode { return this.getToken(GoParser.TYPE, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public DECLARE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECLARE_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSwitchGuard; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSwitchGuard) {
			listener.enterTypeSwitchGuard(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSwitchGuard) {
			listener.exitTypeSwitchGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeSwitchGuard) {
			return visitor.visitTypeSwitchGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeCaseClauseContext extends ParserRuleContext {
	public typeSwitchCase(): TypeSwitchCaseContext {
		return this.getRuleContext(0, TypeSwitchCaseContext);
	}
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeCaseClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeCaseClause) {
			listener.enterTypeCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeCaseClause) {
			listener.exitTypeCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeCaseClause) {
			return visitor.visitTypeCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GoParser.CASE, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSwitchCase; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSwitchCase) {
			listener.enterTypeSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSwitchCase) {
			listener.exitTypeSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeSwitchCase) {
			return visitor.visitTypeSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public NIL_LIT(): TerminalNode[];
	public NIL_LIT(i: number): TerminalNode;
	public NIL_LIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.NIL_LIT);
		} else {
			return this.getToken(GoParser.NIL_LIT, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStmtContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(GoParser.SELECT, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public commClause(): CommClauseContext[];
	public commClause(i: number): CommClauseContext;
	public commClause(i?: number): CommClauseContext | CommClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommClauseContext);
		} else {
			return this.getRuleContext(i, CommClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_selectStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSelectStmt) {
			listener.enterSelectStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSelectStmt) {
			listener.exitSelectStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSelectStmt) {
			return visitor.visitSelectStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommClauseContext extends ParserRuleContext {
	public commCase(): CommCaseContext {
		return this.getRuleContext(0, CommCaseContext);
	}
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_commClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterCommClause) {
			listener.enterCommClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitCommClause) {
			listener.exitCommClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitCommClause) {
			return visitor.visitCommClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GoParser.CASE, 0); }
	public sendStmt(): SendStmtContext | undefined {
		return this.tryGetRuleContext(0, SendStmtContext);
	}
	public recvStmt(): RecvStmtContext | undefined {
		return this.tryGetRuleContext(0, RecvStmtContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_commCase; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterCommCase) {
			listener.enterCommCase(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitCommCase) {
			listener.exitCommCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitCommCase) {
			return visitor.visitCommCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecvStmtContext extends ParserRuleContext {
	public _recvExpr!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECLARE_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_recvStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterRecvStmt) {
			listener.enterRecvStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitRecvStmt) {
			listener.exitRecvStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitRecvStmt) {
			return visitor.visitRecvStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(GoParser.FOR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public forClause(): ForClauseContext | undefined {
		return this.tryGetRuleContext(0, ForClauseContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public rangeClause(): RangeClauseContext | undefined {
		return this.tryGetRuleContext(0, RangeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForClauseContext extends ParserRuleContext {
	public _initStmt!: SimpleStmtContext;
	public _postStmt!: SimpleStmtContext;
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public simpleStmt(): SimpleStmtContext[];
	public simpleStmt(i: number): SimpleStmtContext;
	public simpleStmt(i?: number): SimpleStmtContext | SimpleStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleStmtContext);
		} else {
			return this.getRuleContext(i, SimpleStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_forClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterForClause) {
			listener.enterForClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitForClause) {
			listener.exitForClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitForClause) {
			return visitor.visitForClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeClauseContext extends ParserRuleContext {
	public RANGE(): TerminalNode { return this.getToken(GoParser.RANGE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECLARE_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_rangeClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterRangeClause) {
			listener.enterRangeClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitRangeClause) {
			listener.exitRangeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitRangeClause) {
			return visitor.visitRangeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoStmtContext extends ParserRuleContext {
	public GO(): TerminalNode { return this.getToken(GoParser.GO, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_goStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterGoStmt) {
			listener.enterGoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitGoStmt) {
			listener.exitGoStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitGoStmt) {
			return visitor.visitGoStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeArgs(): TypeArgsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgsContext);
	}
	public typeLit(): TypeLitContext | undefined {
		return this.tryGetRuleContext(0, TypeLitContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_type_; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgsContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GoParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeArgs; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeArgs) {
			listener.enterTypeArgs(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeArgs) {
			listener.exitTypeArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeArgs) {
			return visitor.visitTypeArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public qualifiedIdent(): QualifiedIdentContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeName; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeLitContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public structType(): StructTypeContext | undefined {
		return this.tryGetRuleContext(0, StructTypeContext);
	}
	public pointerType(): PointerTypeContext | undefined {
		return this.tryGetRuleContext(0, PointerTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public interfaceType(): InterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceTypeContext);
	}
	public sliceType(): SliceTypeContext | undefined {
		return this.tryGetRuleContext(0, SliceTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public channelType(): ChannelTypeContext | undefined {
		return this.tryGetRuleContext(0, ChannelTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeLit) {
			listener.enterTypeLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeLit) {
			listener.exitTypeLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeLit) {
			return visitor.visitTypeLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public arrayLength(): ArrayLengthContext {
		return this.getRuleContext(0, ArrayLengthContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLengthContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_arrayLength; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterArrayLength) {
			listener.enterArrayLength(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitArrayLength) {
			listener.exitArrayLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitArrayLength) {
			return visitor.visitArrayLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementTypeContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_elementType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterElementType) {
			listener.enterElementType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitElementType) {
			listener.exitElementType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitElementType) {
			return visitor.visitElementType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerTypeContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(GoParser.STAR, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_pointerType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterPointerType) {
			listener.enterPointerType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitPointerType) {
			listener.exitPointerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitPointerType) {
			return visitor.visitPointerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(GoParser.INTERFACE, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public methodSpec(): MethodSpecContext[];
	public methodSpec(i: number): MethodSpecContext;
	public methodSpec(i?: number): MethodSpecContext | MethodSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodSpecContext);
		} else {
			return this.getRuleContext(i, MethodSpecContext);
		}
	}
	public typeElement(): TypeElementContext[];
	public typeElement(i: number): TypeElementContext;
	public typeElement(i?: number): TypeElementContext | TypeElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeElementContext);
		} else {
			return this.getRuleContext(i, TypeElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_interfaceType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterInterfaceType) {
			listener.enterInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitInterfaceType) {
			listener.exitInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_sliceType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSliceType) {
			listener.enterSliceType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSliceType) {
			listener.exitSliceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSliceType) {
			return visitor.visitSliceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeContext extends ParserRuleContext {
	public MAP(): TerminalNode { return this.getToken(GoParser.MAP, 0); }
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_mapType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMapType) {
			listener.enterMapType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMapType) {
			listener.exitMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitMapType) {
			return visitor.visitMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChannelTypeContext extends ParserRuleContext {
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	public CHAN(): TerminalNode | undefined { return this.tryGetToken(GoParser.CHAN, 0); }
	public RECEIVE(): TerminalNode | undefined { return this.tryGetToken(GoParser.RECEIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_channelType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterChannelType) {
			listener.enterChannelType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitChannelType) {
			listener.exitChannelType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitChannelType) {
			return visitor.visitChannelType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_methodSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMethodSpec) {
			listener.enterMethodSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMethodSpec) {
			listener.exitMethodSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitMethodSpec) {
			return visitor.visitMethodSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_functionType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignatureContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_signature; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSignature) {
			return visitor.visitSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_result; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_parameters; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_parameterDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterParameterDecl) {
			listener.enterParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitParameterDecl) {
			listener.exitParameterDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitParameterDecl) {
			return visitor.visitParameterDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _unary_op!: Token;
	public _mul_op!: Token;
	public _add_op!: Token;
	public _rel_op!: Token;
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(GoParser.EXCLAMATION, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(GoParser.CARET, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(GoParser.AMPERSAND, 0); }
	public RECEIVE(): TerminalNode | undefined { return this.tryGetToken(GoParser.RECEIVE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(GoParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(GoParser.MOD, 0); }
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RSHIFT, 0); }
	public BIT_CLEAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.BIT_CLEAR, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(GoParser.OR, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.NOT_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(GoParser.LESS, 0); }
	public LESS_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.LESS_OR_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(GoParser.GREATER, 0); }
	public GREATER_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.GREATER_OR_EQUALS, 0); }
	public LOGICAL_AND(): TerminalNode | undefined { return this.tryGetToken(GoParser.LOGICAL_AND, 0); }
	public LOGICAL_OR(): TerminalNode | undefined { return this.tryGetToken(GoParser.LOGICAL_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_expression; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public conversion(): ConversionContext | undefined {
		return this.tryGetRuleContext(0, ConversionContext);
	}
	public methodExpr(): MethodExprContext | undefined {
		return this.tryGetRuleContext(0, MethodExprContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public index(): IndexContext | undefined {
		return this.tryGetRuleContext(0, IndexContext);
	}
	public slice_(): Slice_Context | undefined {
		return this.tryGetRuleContext(0, Slice_Context);
	}
	public typeAssertion(): TypeAssertionContext | undefined {
		return this.tryGetRuleContext(0, TypeAssertionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GoParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_conversion; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterConversion) {
			listener.enterConversion(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitConversion) {
			listener.exitConversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitConversion) {
			return visitor.visitConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public operandName(): OperandNameContext | undefined {
		return this.tryGetRuleContext(0, OperandNameContext);
	}
	public typeArgs(): TypeArgsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgsContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_operand; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public basicLit(): BasicLitContext | undefined {
		return this.tryGetRuleContext(0, BasicLitContext);
	}
	public compositeLit(): CompositeLitContext | undefined {
		return this.tryGetRuleContext(0, CompositeLitContext);
	}
	public functionLit(): FunctionLitContext | undefined {
		return this.tryGetRuleContext(0, FunctionLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_literal; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	public NIL_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.NIL_LIT, 0); }
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	public FLOAT_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.FLOAT_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_basicLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterBasicLit) {
			listener.enterBasicLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitBasicLit) {
			listener.exitBasicLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitBasicLit) {
			return visitor.visitBasicLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECIMAL_LIT, 0); }
	public BINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.BINARY_LIT, 0); }
	public OCTAL_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.OCTAL_LIT, 0); }
	public HEX_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.HEX_LIT, 0); }
	public IMAGINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.IMAGINARY_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RUNE_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_integer; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_operandName; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterOperandName) {
			listener.enterOperandName(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitOperandName) {
			listener.exitOperandName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitOperandName) {
			return visitor.visitOperandName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.IDENTIFIER);
		} else {
			return this.getToken(GoParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_qualifiedIdent; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterQualifiedIdent) {
			listener.enterQualifiedIdent(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitQualifiedIdent) {
			listener.exitQualifiedIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitQualifiedIdent) {
			return visitor.visitQualifiedIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompositeLitContext extends ParserRuleContext {
	public literalType(): LiteralTypeContext {
		return this.getRuleContext(0, LiteralTypeContext);
	}
	public literalValue(): LiteralValueContext {
		return this.getRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_compositeLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterCompositeLit) {
			listener.enterCompositeLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitCompositeLit) {
			listener.exitCompositeLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitCompositeLit) {
			return visitor.visitCompositeLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralTypeContext extends ParserRuleContext {
	public structType(): StructTypeContext | undefined {
		return this.tryGetRuleContext(0, StructTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public L_BRACKET(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_BRACKET, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELLIPSIS, 0); }
	public R_BRACKET(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext | undefined {
		return this.tryGetRuleContext(0, ElementTypeContext);
	}
	public sliceType(): SliceTypeContext | undefined {
		return this.tryGetRuleContext(0, SliceTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeArgs(): TypeArgsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_literalType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLiteralType) {
			listener.enterLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLiteralType) {
			listener.exitLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitLiteralType) {
			return visitor.visitLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralValueContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GoParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_literalValue; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLiteralValue) {
			listener.enterLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLiteralValue) {
			listener.exitLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitLiteralValue) {
			return visitor.visitLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public keyedElement(): KeyedElementContext[];
	public keyedElement(i: number): KeyedElementContext;
	public keyedElement(i?: number): KeyedElementContext | KeyedElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyedElementContext);
		} else {
			return this.getRuleContext(i, KeyedElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_elementList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyedElementContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GoParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_keyedElement; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterKeyedElement) {
			listener.enterKeyedElement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitKeyedElement) {
			listener.exitKeyedElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitKeyedElement) {
			return visitor.visitKeyedElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literalValue(): LiteralValueContext | undefined {
		return this.tryGetRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_key; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literalValue(): LiteralValueContext | undefined {
		return this.tryGetRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_element; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructTypeContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(GoParser.STRUCT, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_structType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterStructType) {
			listener.enterStructType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitStructType) {
			listener.exitStructType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitStructType) {
			return visitor.visitStructType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclContext extends ParserRuleContext {
	public _tag!: String_Context;
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public embeddedField(): EmbeddedFieldContext | undefined {
		return this.tryGetRuleContext(0, EmbeddedFieldContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_fieldDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFieldDecl) {
			listener.enterFieldDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFieldDecl) {
			listener.exitFieldDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitFieldDecl) {
			return visitor.visitFieldDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	public RAW_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RAW_STRING_LIT, 0); }
	public INTERPRETED_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.INTERPRETED_STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_string_; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterString_) {
			listener.enterString_(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitString_) {
			listener.exitString_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitString_) {
			return visitor.visitString_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmbeddedFieldContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public typeArgs(): TypeArgsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_embeddedField; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterEmbeddedField) {
			listener.enterEmbeddedField(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitEmbeddedField) {
			listener.exitEmbeddedField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitEmbeddedField) {
			return visitor.visitEmbeddedField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionLitContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_functionLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFunctionLit) {
			listener.enterFunctionLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFunctionLit) {
			listener.exitFunctionLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitFunctionLit) {
			return visitor.visitFunctionLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_index; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Slice_Context extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COLON);
		} else {
			return this.getToken(GoParser.COLON, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_slice_; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSlice_) {
			listener.enterSlice_(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSlice_) {
			listener.exitSlice_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitSlice_) {
			return visitor.visitSlice_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAssertionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeAssertion; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeAssertion) {
			listener.enterTypeAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeAssertion) {
			listener.exitTypeAssertion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitTypeAssertion) {
			return visitor.visitTypeAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELLIPSIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_arguments; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodExprContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_methodExpr; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMethodExpr) {
			listener.enterMethodExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMethodExpr) {
			listener.exitMethodExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitMethodExpr) {
			return visitor.visitMethodExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(GoParser.SEMI, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(GoParser.EOF, 0); }
	public EOS(): TerminalNode | undefined { return this.tryGetToken(GoParser.EOS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_eos; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GoParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


