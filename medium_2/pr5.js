/*
Input: integer
Output: integer

RULES
  - Explicit Rules
    - Featured number characteristics:
      - Must be odd
      - Must be a multiple of 7
      - All of its digits occur exactly once each
    - Raise an error message if there is no next featured number
    - Largest possible featured number is 9876543201

  - Implicit Rules
    - We are looking at all numbers between the given number + 1 and 9876543201 (inclusive)

EXAMPLES
  - Base Case / Happy Path
    - Given number is already a featured number
    - Given number is not a featured number
    - Any number below 9876543201
      - When checking for a featured number, you need the following cases:
        - Number is odd, multiple of 7, and digits occur once
        - Number is not odd
        - Number is not 7
        - Multiple digits present
    - Starting with number greater than 9876543201
  
  - Edge Cases
    - Empty input
    - Negative numbers
    - Wrong data type

DATA STRUCTURES
  - Numbers
    - Used to check if number is odd and multiple of 7
  - Strings/Arrays
    - Can be used to check if all digits are different

ALGORITHM
  - Given an integer
  - If integer is > than 9876543201, return 
    'There is no possible number that fulfills those requirements.''

  - Create a loop that iterates from the given integer + 1 until 9876543201
    - Check if number is odd
    - Check if number is multiple of 7
    - Check if all digits of number are unique
    - If all of the above are true, return the number

  - If you get through the loop without finding a featured number, return
    invalid error message

*/

const invalidNumberMessage = "There is no possible number that fulfills those requirements."
const maxFeaturedNumber = 9876543201;

function isOddAndMultipleOfSeven(integer) {
  return integer % 2 === 1 && integer % 7 === 0
}

function hasUniqueDigits(integer) {
  let stringInteger = integer.toString();
  let uniqueDigits = [];
  
  stringInteger.split('').forEach(char => {
    if (!uniqueDigits.includes(char)) {
      uniqueDigits.push(char);
    }
  })

  return uniqueDigits.length === stringInteger.length;
}

// console.log(hasUniqueDigits(133));      // false
// console.log(hasUniqueDigits(1234567));  // true
// console.log(hasUniqueDigits(44444));    // false

// console.log(isOddAndMultipleOfSeven(7));    // true
// console.log(isOddAndMultipleOfSeven(13));  // false
// console.log(isOddAndMultipleOfSeven(21)); // true
// console.log(isOddAndMultipleOfSeven(28));; // false

function featured(integer) {
  if (integer >= maxFeaturedNumber) {
    return invalidNumberMessage;
  }

  for(let currentValue = integer + 1; currentValue <= maxFeaturedNumber; currentValue += 1) {
    if (isOddAndMultipleOfSeven(currentValue) && hasUniqueDigits(currentValue)) {
      return currentValue;
    } 
  }

  return invalidNumberMessage;
}

console.log(featured(12));;           // 21
console.log(featured(20));;           // 21
console.log(featured(21));;           // 35
console.log(featured(997));;          // 1029
console.log(featured(1029));;         // 1043
console.log(featured(999999));;       // 1023547
console.log(featured(999999987));;    // 1023456987
console.log(featured(9876543186));;   // 9876543201
console.log(featured(9876543200));;   // 9876543201
console.log(featured(9876543201));;   // "There is no possible number that fulfills those requirements."