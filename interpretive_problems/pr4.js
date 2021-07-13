/*
PROBLEM
  -  Write a function that implements the Caesar Cipher

Input: string, integer
Output: string

RULES
  - Explicit Rules
    - The Caesar cipher is a substitution cipher in which each letter in a `plaintext` is
      substituted by the letter located a given number of positions away in the alphabet
        - If 'A' is shifted by 3 positions, it will be substituted by letter 'D'

    - The shift value is known as the key, and the key can be used to decrypt the cypher text
      - Using the cipher twice in a row should return the original string

    - The cipher only encrypts letters, both upper and lower case
      - Substituted letters are left in the same case as the original letter
    - Other characters are not encrypted, they are left as is
    - If the value for shifting exceeds the length of the alphabet,
      it wraps around from the beginning

EXAMPLES
  - Base Case / Happy Path
    - String is all in lowercase
    - String is all in uppercase
    - String has mixed cases
    - String has punctuation, special characters (including spaces)
    - Shift is less that the alphabet size
    - Shift is more than the alphabet size

  - Edge Cases
    - Empty string?
    - Missing second argument?
    - Alternating arguments?
    - String with no letters?
    - Negative shift value?

DATA STRUCTURES
  - Arrays
    - Iterate and "rotate" each character as needed
  - Hash
    - Store letter and its rotated equivalent

MENTAL MODEL - Character Rotation
  - Array of all alphabet letters
    - Cycle through the array (shift value) amount of times starting from the 
      current character
    - If we are looking at the letter 'A' and we want to shift it 47 times:
      - Start iteration from where A is, iterate from each character in the alphabet array
        only 47 times
      - If at any time we reach the end of the array, we will change our current index to be 0

ALGORITHM
  - Split string into individual characters
  - Map through each char, and for each of them
    - If the character is alphabetical, transform into its shifted value
    - If not, leave as is
 */

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

function encryptLetter(string, shiftValue) {
  let counter = 0;
  let startingIndex = alphabet.indexOf(string.toLowerCase());
  let newLetter;

  for(let index = startingIndex; counter <= shiftValue; counter += 1, index += 1) {
    if (index > 25) index = 0;
    newLetter = alphabet[index];
  }

  return string === alphabet[startingIndex] ? newLetter : newLetter.toUpperCase();
}

function caesarEncrypt(string, shiftValue) {
  let stringChars = string.split('');
  
  let transformedArray = stringChars.map(char => {
    if (/[a-zA-Z]/.test(char)) {
      return encryptLetter(char, shiftValue);
    } else {
      return char;
    }
  })

  return transformedArray.join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"