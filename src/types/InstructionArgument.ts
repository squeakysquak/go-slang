import { Closure } from "../GoVirtualMachine";
import { Address } from "./Address";
import { Offset } from "./Offset";

export type InstructionArgument = number | string | Closure | Address | Offset; // TODO refactor
export default InstructionArgument;
