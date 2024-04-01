export enum OpCodes {
  POP = "POP",
  ASSIGN = "ASSIGN",
  REASSIGN = "REASSIGN",
  ADD = "ADD",
  MINUS = "MINUS",
  NEGATIVE = "NEGATIVE",
  MULT = "MULT",
  DIV = "DIV",
  MOD = "MOD",
  OR = "OR",
  AND = "AND",
  NOT = "NOT",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  LESS = "LESS",
  LESS_OR_EQUALS = "LESS_OR_EQUALS",
  GREATER = "GREATER",
  GREATER_OR_EQUALS = "GREATER_OR_EQUALS",
  LDCI = "LDCI",
  LDCB = "LDCB",
  LDC = "LDC",
  ENTER_BLOCK = "ENTER_BLOCK",
  EXIT_BLOCK = "EXIT_BLOCK",
  DONE = "DONE"
}

export default OpCodes
