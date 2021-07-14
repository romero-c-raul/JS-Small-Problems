/*
PROBLEM
    - Write a function that implements a vigener cipher
    
Input: String (plaintext), String (keyword)
Output: String

RULES
    - Explicit Rules
        - We use a series of ceasar ciphers based on the letters of a keyword
          - Each letter of the ketword is treated as a shift value
          - The shift value for a letter is equal to its index value in
            the alphabet (a-z is equivalent to 0-25) 
    - Implicit Rule
        - Ignore any non alphabetic characters
            
EXAMPLES
    plaintext: Pineapples don't go on pizzas!
    keyword: meat

    Applying the Vigenere Cipher for each alphabetic character:
    plaintext : Pine appl esdo ntgo onpi zzas
    shift     : meat meat meat meat meat meat
    ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

    result: Bmnxmtpeqw dhz'x gh ar pbldal!

    - Base Case / Happy Path
        - plaintext includes spaces and special chars
        - plaintext has a mix of upper and lower case
        - Keyword has mixed cases
        - Keyword has all upper cases
        - Keyword has all lower cases

    - Edge Cases
        - Keyword is longer than plaintext
        - Keyword contains special chars, spaces
        - plaintext does not 'divide' evenly to a keyword   
        - String contains multiple spaces?
        - Empty plaintext, empty keyword

DATA STRUCTURES
    - String; separate characters individually
    - Array; store characters, apply transformation as needed

ALGORITHM
    - Given a plaintext and a keyword
    - Create an index tracker for keyword
    - Create a new empty string
    - Iterate through every character, and for every character
        - if not alphabetical
          - append to new string
        - If alphabetical:
            - Transform every character using the ceasar cipher, and append to new
              string
            - Increase the keyword index value by 1
            - If we ever reach the end of the keyword, we reset the index
                that we are using to 0
    - Return new string 
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

function vigenereCipher(plaintext, keyword) {
  let keywordIndex = 0;
  let transformedString = '';

  for(let index = 0; index < plaintext.length; index += 1) {
    let currentPlaintextChar = plaintext[index];
    let currentKeywordChar = keyword[keywordIndex].toLowerCase();

    if (/[a-zA-Z]/.test(currentPlaintextChar)) {
      transformedString += caesarEncrypt(currentPlaintextChar, alphabet.indexOf(currentKeywordChar));
      keywordIndex += 1;
    } else {
      transformedString += currentPlaintextChar;
    }

    if (keywordIndex >= keyword.length) {
      keywordIndex = 0;
    }
  }

  return transformedString;
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat')); 
console.log(vigenereCipher("PineApples dOn't go on PizzAS!", 'meat')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'MEAT')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'mEAt')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'mEAt')); 

console.log(vigenereCipher("Pin  ea'ppl/es d  on't go on p!@i zz  $as!", 'mEAt')); 
console.log(vigenereCipher("Pineapples don't go on pizz!", 'mEAt')); 
console.log(vigenereCipher("Pin", 'meat')); 
console.log(vigenereCipher("Dog", 'Rabbit')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab')); 
