/*
input: string
output: string

rules
  - Explicit rules:
    - Write a function that returns true if the string passed as an argument is a palindrome, 
      or false otherwise
    - A palindrome reads the same forwards and backwards
    - Function should be case insensitive
    - Function should ignore all non-alphanumeric characters

DATA STRUCTURES
- Strings
- Array (possibly)

ALGORITHM
- Remove all non-alpha numeric character from string
- Downcase all characters
- reverse string and compare with a copy that is not reversed
*/

function isRealPalindrome(string) {
  let cleanString = string.replace(/[^A-za-z0-9]/g, '').toLowerCase();
  return cleanString === cleanString.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false