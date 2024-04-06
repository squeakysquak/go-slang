import Instruction from "./Instruction";

export class InstructionTree {
    contents: (InstructionTree | Instruction)[];
    size: number;
    constructor(init: (InstructionTree | Instruction)[] = []) {
        this.contents = init;
        this.size = 0;
        for (let i = 0; i < init.length; ++i) {
            const piece = init[i];
            if (piece instanceof Instruction) {
                this.size += 1;
            } else {
                this.size += piece.size;
            }
        }
    }
    flatten() {
        const res: Instruction[] = [];
        this.collect(res);
        return res;
    }
    push(piece: InstructionTree | Instruction) {
        this.contents.push(piece);
        if (piece instanceof Instruction) {
            this.size += 1;
        } else {
            this.size += piece.size;
        }
    }
    private collect(instrs: Instruction[]) {
        for (let i = 0; i < this.contents.length; ++i) {
            const piece = this.contents[i];
            if (piece instanceof Instruction) {
                instrs.push(piece);
            } else {
                piece.collect(instrs);
            }
        }
    }
}
export default InstructionTree;
