import { InstructionArgument } from "./InstructionArgument";
import { Opcode } from "./Opcode";

export class Instruction {
    opcode: Opcode;
    args: InstructionArgument[];
    constructor(opcode: Opcode, args: InstructionArgument[]) {
        this.opcode = opcode;
        this.args = args;
    }
}
