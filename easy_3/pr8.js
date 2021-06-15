/*
input: string
output: string

rules:
  Explicit rules:
    - Write a function that swaps the first and last letters of every word
      - Assume that every word contains at least one letter
      - String will always contain at least one word
      - Assume that each string contains nothing but words and spaces
      - There are no leading, trailing, or repeated spaces

DATA STRUCTURES
- Strings
- Arrays

ALGORITHM
- Split input string by spaces, creating an array of strings
- Iterate through each element of array, and for each iteration:
  - Split substring into array
  - Determine the last index of that element
  - Swap first and last letters (maybe using multiple re-assignment with arrays?)
- Join new array with spaces
 */

function swap(string) {
  let splitString = string.split(" ");
  let swappedArray = [];

  splitString.forEach(element => {
    let lastIndex = element.length - 1;
    let reversedSubstring = element.split('');

    [reversedSubstring[0], reversedSubstring[lastIndex]] = [reversedSubstring[lastIndex], reversedSubstring[0]]
    swappedArray.push(reversedSubstring.join(''));
  })


  return swappedArray.join(' ');
}

// Using map
/*
ALGORITHM
- Split string by spaces, creating new array of substrings
- Map through every substring, and for every substring:
  - Split into individual characters to create a mutable array
  - Swap first and last characters using multiple re-assignment
  - Join all characters together and return new string
*/

function swap(string) {
  let splitString = string.split(" ");
  let swappedArray;

  swappedArray = splitString.map(substring => {
    let lastIndex = substring.length - 1;
    let splitSubstring = substring.split('');
    
    [splitSubstring[0], splitSubstring[lastIndex]] = [splitSubstring[lastIndex], splitSubstring[0]];
    
    return splitSubstring.join('');
  })

  return swappedArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"