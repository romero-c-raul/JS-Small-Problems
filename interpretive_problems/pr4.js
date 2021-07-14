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
    - Split plaintext into individual characters
    - Create an index tracker for keyword
    - Iterate through every character, and for every character
        - Go to the next character if not alphabetical
        - If alphabetical:
            - Transform every character based on the current letter of the
                keyword (Using caesar cipher)
            - Increase the keyword index value by 1
            - If we ever reach the end of the keyword, we reset the index
                that we are using to 0
    - Join 
*/

function vigenereCipher(plaintext, keyword) {

}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat')); 
console.log(vigenereCipher("PineApples dOn't go on PizzAS!", 'meat')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'MEAT')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'mEAt')); 
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'mEAt')); 

console.log(vigenereCipher("Pinea'ppl/es don't go on p!@izz$as!", 'mEAt')); 
console.log(vigenereCipher("Pineapples don't go on pizz!", 'mEAt')); 
console.log(vigenereCipher("Pin", 'meat')); 

