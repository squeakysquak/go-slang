export enum Opcode {
    ///// Frames
    ENTER_BLOCK = "ENTER_BLOCK", // ENTER_BLOCK sz ; sz is the expected number of items in this block
    EXIT_BLOCK = "EXIT_BLOCK", // EXIT_BLOCK ;
    ASSIGN = "ASSIGN", // ASSIGN depth, idx ; OS: data
    REASSIGN = "REASSIGN", // REASSIGN ; OS: target, value

    ///// Operators
    // Unary operators
    UPLUS = "UPLUS", // UPLUS ; OS: number
    UMINUS = "UMINUS", // UMINUS ; OS: number
    NOT = "NOT", // NOT ; OS: boolean
    BITWISE_NOT = "BITWISE_NOT", // BITWISE_NOT ;
    DEREF = "DEREF", // DEREF ; OS: pointer to data
    REF = "REF", // REF ; OS: data
    RECV = "RECV", // RECV ; OS: channel
    // Binary operators
    MULT = "MULT", // MULT ; OS: num1 num2, computes num1 * num2
    DIV = "DIV", // DIV ; OS: num1 num2, computes num1 / num2
    MOD = "MOD", // MOD ; OS: num1 num2, computes num1 % num2
    LSHIFT = "LSHIFT", // LSHIFT ;
    RSHIFT = "RSHIFT", // RSHIFT ;
    BITWISE_AND = "BITWISE_AND", // BITWISE_AND ;
    BITWISE_CLEAR = "BITWISE_CLEAR", // BITWISE_CLEAR ;
    ADD = "ADD", // ADD ; OS: num1 num2, computes num1 + num2
    SUB = "SUB", // SUB ; OS: num1 num2, computes num1 - num2
    BITWISE_OR = "BITWISE_OR", // BITWISE_OR ;
    BITWISE_XOR = "BITWISE_XOR", // BITWISE_XOR ;
    EQUALS = "EQUALS", // EQUALS ; OS: o1 o2, computes o1 == o2
    NOT_EQUALS = "NOT_EQUALS", // NOT_EQUALS ; OS: o1 o2, computes o1 != o2
    LESS = "LESS", // LESS ; OS: num1 num2, computes num1 < num2
    LESS_OR_EQUALS = "LESS_OR_EQUALS", // LESS_OR_EQUALS ; OS: num1 num2, computes num1 <= num2
    GREATER = "GREATER", // GREATER ; OS: num1 num2, computes num1 > num2
    GREATER_OR_EQUALS = "GREATER_OR_EQUALS", // GREATER_OR_EQUALS ; OS: num1 num2, computes num1 >= num2
    AND = "AND", // AND ; OS: bool1 bool2, computes bool1 && bool2
    OR = "OR", // OR ; OS: bool1 bool2, computes bool1 || bool2

    ///// OS manipulation
    LDCI = "LDCI", // LDCI num ; load integer - puts num on the OS
    LDCF = "LDCF", // LDCF num ;
    LDCB = "LDCB", // LDCB bool ; load boolean - puts bool on the OS
    LDN = "LDN", // LDN ; puts nil on the OS
    LD = "LD", // LD depth, idx ; load variable into OS
    LDF = "LDF", // LDF entry_point ; load function - puts func on the OS
    POP = "POP", // POP ; remove last item on OS

    ///// Control flow
    JUMP = "JUMP", // JUMP offset ; jump to relative address
    CALL = "CALL", // CALL numParams ; OS: parameters left to right, then function pointer; the callee is responsible for removing arguments from the OS, except for builtins
    RETURN = "RETURN", // RETURN ; jumps to caller
    DONE = "DONE", // DONE ; terminates the program
}
export default Opcode;
