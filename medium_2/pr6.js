/*

Input: integer
Output: integer

RULES
  - Explicit Rules
    - Write a function that computes the difference between the square of the sum of the
      first n positive integers and the sum of the squares of the first n positive integers
    - If integer is 3:
      - (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
      - We always start from 1 up to the given integer (inclusive)
    
EXAMPLES
  - Base Case
    - Any positive integer as input
      - Single, double triple, digits

  - Edge Case
    - Zero as input integer
      - What should we return
    - Negative integer as input
      - What should we return? 
    - What about empty input?
    - Another data type?

DATA STRUCTURES
  - Arrays
    - Allow us to map through every element and transform
    - Allow us to reduce several numbers to a single value

ALGORITHM
  - Given an integer
  - Create an array from 1 to the given integer

  - Get the square of the sum:
    - Copy array of integers, and reduce values from the array of integers 
      by adding them all up, and square the value

  - Get the sum of the squares:
    - Copy the array of integers, and transform the values from the array by 
      squaring each of them. 
      - After transformation, reduce all the squared values by adding them up

  - Return the differnce between the square of the sum and the sum of squares
*/

function sumSquareDifference(integer) {
  let firstIntegers = [];

  for(let num = 1; num <= integer; num += 1) {
    firstIntegers.push(num);
  }

  let squareOfSum = firstIntegers.reduce((total, value) => total + value) ** 2;
  let sumOfSquares = firstIntegers.map(num => num ** 2)
                                  .reduce((total, value) => total + value);
  
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));    // 2640
console.log(sumSquareDifference(1));     // 0
console.log(sumSquareDifference(100));    // 25164150