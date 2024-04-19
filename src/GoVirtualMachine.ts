import * as fs from 'fs';

import { compile } from './compiler';
import { run } from './runtime';

if (process.argv.length < 3) throw Error("Usage: node GoVirtualMachine.js path/to/script.go");
const script = process.argv[2];
let show_instr = true;
if (process.argv.length >= 4) show_instr = process.argv[3] == "true";
let debug_runtime = false;
if (process.argv.length >= 5) debug_runtime = process.argv[4] == "true";

const input = fs.readFileSync(script, 'utf8');
const program = compile(input);
run(program, show_instr, debug_runtime);
