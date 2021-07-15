/*
MENTAL MODEL
  - We know that the current fibonacci number is the sum of the preceding two fibonacci numbers
  - Fibonacci 1 and fibonacci 2 are both 1

ALGORITHM
  - given an integer 
  - Create an array that stores the inital values 0 1 1
    - The last two values represent the fibonacci 1 and 2 values
  - Create a loop that runs until the current element we look at is greater or equal to the
    - Add up the last two elements of the array
    - Push the sum of the previous elements to the end of the array

  - Return the last element of array
*/

function fibonacci(integer) {
  let fibonacciResults = [0, 1, 1]; 

  for(let index = 3; index <= integer; index += 1) {
    let lastTwoNums = fibonacciResults.slice(-2);
    let newFibonacci = lastTwoNums.reduce((total, value) => total + value);

    fibonacciResults.push(newFibonacci);
  }

  return fibonacciResults[integer];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050