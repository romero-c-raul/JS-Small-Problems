function fibonacci(integer, memo = {}) {
  // Base case
  if (integer <= 2 ) {
    return 1;
  }

  // If key-value pair for the current fibonacci does not exist, add it to the object
  if (!memo[integer]) {
    memo[integer] = fibonacci(integer - 1) + fibonacci(integer - 2);
  }

  // The result for the current fib number is the sum of the previous two numbers
  return memo[integer];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765