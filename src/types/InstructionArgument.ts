import Address from "./Address";
import Offset from "./Offset";

export type InstructionArgument = number | boolean | Address | Offset; // TODO refactor
export default InstructionArgument;
