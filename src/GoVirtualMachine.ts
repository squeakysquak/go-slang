import * as fs from 'fs';

import { compile } from './compiler';
import { run } from './runtime';

const input = fs.readFileSync('gotests/goroutine-nodeadlock.go', 'utf8');
const program = compile(input);
run(program);
