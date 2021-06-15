/*
input: string
output: string

rules
  - Explicit rules:
    - Write a function that returns true if the string passed as an argument is a palindrome, 
      or false otherwise
    - A palindrome reads the same forwards and backwards
    - For this problem, the case matters and all characters matter

DATA STRUCTURES
- Strings
- Array (possibly)

ALGORITHM
- Take input string and reverse it
- Iterate through both the original string and reversed string
  - If both characters are not equal, return false
- Return true after iteration is done, this means string is a palindrome

*/

function isPalindrome(string) {
  let reverseString = string.split('').reverse();

  for(let index = 0; index < string.length; index += 1) {
    if (string[index] !== reverseString[index]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true