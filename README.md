## Summary of Project
This project is a Concurrent Virtual Machine for Go and Standard Project 2 of CS4215 in Semester 2 of AY2023/24. It is written in TypeScript, reads its input from a file and is run using the command line. The virtual machine currently only supports Windows.

## Prerequisites
- Yarn - [Official installation instructions](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- NodeJS v20 - [Official download page](https://nodejs.org/en/download)

## Features
The virtual machine supports a sublanguage of Go and is currently able to handle the following:
- **Data types**: Numbers & booleans
- **Arithmetic operations**: +, -, /, *, %
- **Logical operations**: ||, &&, !, ==, !=, <=, >=, <, >
- **Loop types**: For clause (for loop), expression (while loop)
- **Conditional statements**: If, if else & else
- **Concurrency**: go, make, <-

## Usage (Windows)
1. Clone the repository into any folder on your device.
2. Navigate to the root folder of the repository in a command prompt and run `yarn install`.
3. Run `yarn tsc` to build the TypeScript files.
4. Run `node dist/GoVirtualMachine.js path/to/file.go` to run the virtual machine. Two optional command-line arguments can be passed: `show-instructions`(default true), which shows the Goroutine, Program Counter (PC) and the instruction being run at each step; `debug-runtime`(default false), which also prints information about the Operand Stack (OS), Runtime Stack (RTS), and Environment at each step.
5. The virtual machine will log the contents of the OS, environment and RTS with each instruction run. This can be used to verify that the contents are correct. The following example image shows the output for the number 4 being sent to a channel. ![image3](https://github.com/squeakysquak/go-slang/assets/69624825/0696ed9b-d2f2-4603-9bfc-726731388994)

### Provided test cases
The repository includes a few test case files which can be found inside the gotests folder. Each test file is written to test different features of the virtual machine.
- **arithmetic.go** - arithmetic operations
- **assignment.go** - variable assignment and reassignment
- **blocks.go** - handling of blocks and environment frames
- **channels.go** - creation of channels and receive operations
- **conditionals.go** - conditional statements
- **func.go** - function declaration, calling and higher-order functions
- **goroutine-deadlock.go** - goroutines and channels with deadlock
- **goroutines.go** - goroutines using functions and channels
- **logical.go** - logical operations
- **loops.go** - for loops
- **sequence.go** - handling of sequences and a relatively long program with different constructs
- **tailcall.go** - tail calls
