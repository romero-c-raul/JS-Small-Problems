/*
PROBLEM
  - Write a function that displays a four-pointed diamond in an n x n grid

Input: Integer
Output: Several strings or a single joined string

RULES
  Explicit Rules
    - Function should display a four pointed diamond in an n x n grid
      - n is an odd integer supplied as an argument
      - Assume the argument will always be odd
  
  Implicit Rules
    - The integer determines the max width of the diamond
      - Meaning, the widest part, or the middle of the diamond, will be n asterisks long
    - Start with 1 asterisk, and progresively increase by 2 until we reach the input n
    - After reaching input n, we will decrease the asterisks by 2 until we reach 1
      - For an input of 5:
        - 1, 3, 5, 3, 1
      - For an input of 9:
        - 1, 3, 5, 7, 9, 7, 5, 3, 1
    - Every line will be prepended by spaces
      - The spaces will be determined by (N - (number of asterisks)) / 2

EXAMPLES
  - Base Case
    - Integer, odd number

  - Edge Cases
    - Even numbers?
    - Empty argument?
    - Negative number?

ALGORITHM
  - Print the upper part of the diamond
    - Iterate from 1 through the given input - 1
      - On each iteration:
        - Calculate number of empty spaces need: (Input - current number) / 2 
        - Print spaces + a star repeated (current number) amount of times

  - Print the middle single line of the diamond
    - Print a star as many times as the given input

  - Print the lower part of the diamond
    - Iterate from given input - 1 to 1
      - On each iteration:
        - Calculate number of empty spaces needed: (input - current number) / 2
        - Print spaces + a star repeated (current number) amount of times
*/

function diamond(maxWidth) {
  // Printing top of diamond
  for(let topPosition = 1; topPosition <= maxWidth - 1; topPosition += 2) {
    let spaces = ' '.repeat((maxWidth - topPosition) / 2);
    let stars = '*'.repeat(topPosition);
    console.log(spaces + stars);
  }

  // Printing middle of diamond
  console.log('*'.repeat(maxWidth));

  // Printing bottom of diamond
  for(let bottomPosition = maxWidth - 2; bottomPosition >= 1; bottomPosition -= 2) {
    let spaces = ' '.repeat((maxWidth - bottomPosition) / 2);
    let stars = '*'.repeat(bottomPosition);
    console.log(spaces + stars);
  }
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));