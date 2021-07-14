/*
PROBLEM
  - Write a function that displays an 8-pointed star in a n x n grid

Input: integer, odd and greater or equal to 7
Output: Several strings or a concatenated string

RULES
  - Explicit rules
    - N is an odd integer
    - The smallest star you need to handle is 7 (7 x 7)
  - Implicit rule
    - The height of the star will be `n`
      - Meaning, the total lines that output asterisks will equal 'n'

    - The middle of the star will have n consecutive stars
      - No spaces either in front or back

    - Each line will output 3 asterisks, going from the center (if n is 9):
      - 3 spaces, 3 asterisks
      - 2 spaces, asterisk, space, asterisk, space, asterisk
      - 1 space, asterisk, two spaces, asterisk, two spaces, asterisk
      - 0 space, asterisk, three spaces, asterisk, three spaces, asterisk

      The pattern is (from top to bottom):
        - For spaces to prepend: 0, 1, 2 ... ((n - 1) / 2) - 1
        - For spaces between stars: ((n - 1) / 2) - 1 ... 2, 1, 0
         
EXAMPLES
  - Negative numbers?
  - 0?
  - Empty argument?
  - Even number?

DATA STRUCTURES
  - Strings

ALGORITHM
  - Given an odd integer `n`
  - Calculate the max number of spaces present in the whole star
    - ((n - 1) / 2) - 1
  
  - Print top half of star by 
    - Iterate from 0 to max number, and iterate from the max number to 0
      - 0 to max represents the spaces to prepend
      - max to 0 represents the spaces between asterisks
      - On each iteration, increase prepended spaces by 1, and 
        decrease spaces between asterisk by 1

  - Print middle
    - repeat star n amount of times

  - Print bottom half by
    - Iterate from max number to 0, and iterate from 0 to max number
    - max to 0 represents the spaces to prepend
    - 0 to max represents the spaces between asterisks
    - On each iteration, decrease spaces to prepend by 1, and 
      increase spaces between asterisks by 1

*/

function star(maxWidth) {
  let maxSpaces = ((maxWidth - 1) / 2) - 1;
  let maxLines = Math.floor(maxWidth / 2) - 1;

  for(let prependSpaces = 0, betweenSpaces = maxSpaces;  prependSpaces <= maxLines; prependSpaces += 1, betweenSpaces -= 1) {
    let prepend = ' '.repeat(prependSpaces);
    let between = ' '.repeat(betweenSpaces);
    
    console.log(prepend + '*' + between + '*' + between + '*');
  }

  console.log('*'.repeat(maxWidth));

  for(let prependSpaces = maxSpaces, betweenSpaces = 0;  prependSpaces >= 0 ; prependSpaces -= 1, betweenSpaces += 1) {
    let prepend = ' '.repeat(prependSpaces);
    let between = ' '.repeat(betweenSpaces);
    
    console.log(prepend + '*' + between + '*' + between + '*');
  }
}

star(7);
console.log('');
star(9);
console.log('');
star(11);
