/*
PROBLEM
  - Write a function that takes an integer and returns the maximum rotation of that integer

Input: Integer
Output: Integer

MENTAL MODEL
  - Given number 735291
    - Rotate by 1 digit: 352917
    - Keep first digit same, and rotate remaining: 3 29175
    - Keep first two digits same, and rotate remaining: 32 1759
    - keep first three digits same, and rotate remaining: 321 597
    - Keet first four digits same, and rotate remaining: 3215 79
    - Keep first five digits same, and rotate remaining: 32157 9
  - Theres as many rotations as there are digits

  - We need to slice the numbers we want to keep the same on each iteration
    - num.slice(0,0) starting point
    - num.slice(0, 1)
    - num.slice(0, 2) etc... Until second arg is >= number length
  - We need to slice the numbers we want to rotate on each iteration
    - num.slice(0) starting point
    - num.slice(1)
    - num.slice(2)
    - num.slice(3) etc... Until arg is >= number length
  - Rotate numbers
  - Increase numbers to keep the same by 1 and numbers to slice should shift by 1 space

RULES
  Explicit Rules:
    - 

EXAMPLES
  Base Cases
    - Integer made up up 3 or more digits
    - Integer made up of 2 or less digits
  
  Edge Cases
    - Non number

DATA STRUCTURES
  - Strings
    - Allow us to use slice

ALGORITHM
  - Given a number
  - Create a copy of number in string form
  - Use a loop to iterate from 0 to the length of the number (how many digits it has)
    - For each iteration (where parameter is n):
      - Identify which numbers to keep the same (slice(0, n))
      - Identify which numbers to rotate (slice(n))
      - Rotate the numbers
      - Reassign number string to the (numbers kept the same + rotated numbers)

 - Return string 
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length <= 1) {
    return [];
  }

  let remainingElements = arr.slice(1);
  remainingElements.push(arr[0]);

  return remainingElements;
}

function maxRotation(number) {
  let numberString = number.toString();

  for(let index = 0; index < numberString.length - 1; index += 1) {
    let numbersKeptSame = numberString.slice(0, index);
    let numbersToRotate = numberString.slice(index);
    let rotatedNumbers = rotateArray(numbersToRotate.split('')).join(''); 

    numberString = numbersKeptSame + rotatedNumbers;
  }

  console.log(Number(numberString));
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845