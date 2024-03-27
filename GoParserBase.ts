import { TokenStream } from 'antlr4ts';
import { Parser } from 'antlr4ts/Parser';
import { GoParser } from './GoParser'; // Import your GoParser if needed

/**
 * All parser methods that used in grammar (p, prev, notLineTerminator, etc.)
 * should start with lower case char similar to parser rules.
 */
export abstract class GoParserBase extends Parser {
    protected constructor(input: TokenStream) {
        super(input);
    }

    /**
     * Returns true if the current Token is a closing bracket (")" or "}")
     */
    protected closingBracket(): boolean {
        const prevTokenType = this._input.LA(1);

        return prevTokenType === GoParser.R_CURLY || prevTokenType === GoParser.R_PAREN;
    }
}