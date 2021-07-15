/*
PROBLEM
  - Write a function that rotates the last n digits of a number. For the rotation, 
    rotate by one digit to the left, moving the first digit to the end.

Inputs: integer, integer
Outputs: String? Integer?

RULES
  - Explicit Rules:
    - Rotation is dependant on the second argument
      - If the second argument is 2, we will rotate the last 2 digits of that argument
      - If it is 3, we will rotate the last 3 digits of that argument
    - By rotation, we mean that we take the first element and we move it to the back of the array,
      while the other elements get shifted up

EXAMPLES
  Base Case / Happy Path
    - Second arg is 0
    - Second arg is 1
    - Different intervals of rotation, from 1 to length of first argument
  
  Edge Cases
    - Second arg is negative
    - Second argument greater length than first argument


DATA STRUCTURES
  - Strings
    - Allow us to concatenate and slice the numbers as we need
  - Arrays
    - Allow us to store and move around every number as needed

ALGORITHM
  - Given an integer and last numbers
  - Identify the last numbers in integer, based on the second arg provided
  - Rotate those numbers
  - Concatenate the numbers that were not rotated with the numbers that were
    - Numbers that were not rotated can be determined with slice(0, length - second arg)
    - Rotated numbers can be determined with slice(last numbers * -1)
*/

function rotateRightmostDigits(integer, numberOfDigits) {
  let stringInteger = integer.toString();
  
  if (numberOfDigits < 2) return Number(stringInteger);

  let lastNumbers = stringInteger.slice(numberOfDigits * -1);
  let nonRotatedNumbers = stringInteger.slice(0, stringInteger.length - numberOfDigits);
  let rotatedNumbers = rotateArray(lastNumbers.split('')).join('');

  return Number(nonRotatedNumbers + rotatedNumbers);
}

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

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917