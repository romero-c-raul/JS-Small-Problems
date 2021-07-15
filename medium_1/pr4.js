/*
PROBLEM
  - Write a function that implements a miniature stack-and-register-based programming language that 
    has the following commands

Input: string
Output: Print to terminal according to commands

RULES
  - Explicit Rules:
    - Register is the current value, not part of the stack
    - Stack is a list of values that uses to methods: pop and push

    - An operation that requires two values: 
      - Pops the topmost item from the stack, 
      - Operates on the popped value and the register value
      - And stores the result back to the register
        - Commands include: n, PUSH, ADD, SUB, MULT, DIV, REMAINDER, POP, PRINT
    
    - All operations are integer operations
    - All arguments are valid programs
    - Initialize stack and register to [] and 0 respectively 
  
  - Implicit Rules
    - All commands are separated by a single space

EXAMPLES
  Base Case
    input: '5 PUSH 3 MULT PRINT'
      - Place 5 in register
      - Push value on register (5) to stack
      - Place 3 in register (5 is overriden)
      - Pop the last value on stack and multiply by register value
        - This becomes the new register value
    
  Edge Cases
    - Empty commands
    - Negative values in commands (handle with parseInt)
    - Trying to pop something from empty stack


DATA STRUCTURES
  - Array
    - Stack is built on an array structure, pop and push will be used
  - Numbers
    - Will be used to any mathematical operations

ALGORITHM
  - Given a string of commands
  - Create an empty array for our stack structure
  - Declare a variable to 0 for our register

  - Split string into individual commands
  - Iterate thorugh list of commands, and for each command:
    - If command is PUSH:
      - Push register value to the stack
    - If command is ADD:
      - Pop value from stack and add it to the register
      - Store the result in register
    - If command is SUB:
      - Pop value from stack and subtract it from the register
      - Store the result in register
    - If command is MULT:
      - Pop value from stack and multiply it with the register
    - If command is DIV:
      - Pop value from stack and divide the register value by the popped value
    - If command is REMAINDER:
      - Pop a value from the stack and divide the register value by the popped stack value
    - If command is POP:
      - Remove the last element in stack and place in register
    - If command is PRINT:
      - Print register value
    - Else (means command is a string representation of integer):
      - Place value in register, do not modify stack
*/

function minilang(commands) {
  let stack = [];
  let register = 0;

  let individualCommands = commands.split(' ');
  
  individualCommands.forEach(currentCommand => {
    switch (currentCommand) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register = stack.pop() + parseInt(register, 10);
        break;
      case 'SUB':
        register = parseInt(register, 10) - stack.pop();
        break;
      case 'MULT':
        register = stack.pop() * parseInt(register, 10);
        break;
      case 'DIV':
        register = parseInt(register, 10) / stack.pop();
        break;
      case 'REMAINDER':
        register = parseInt(register, 10) % stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register)
        break;
      default:
        register = parseInt(currentCommand);
        break;
    }
  })
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)