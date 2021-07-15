/*

EXAMPLES
  - Edge Cases
    - Number in mixed case, all upper and all lower
    - Special characters in front or at the end of every number word
      - Meaning we can't simply split by spaces
ALGORITHM
  - Given a string 
  - Create an array with numbers zero to nine in ascending order
  - Iterate through the array elements and index
    - For every element and index
      - Convert current element into regex pattern (global and case insensitive flags)
      - Replace every instance of the current element in the input string
         with its number equivalent
  - Return string
*/

const numberWords = ['zero', 'one', 'two', 'three', 'four',
                     'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(message) {
  numberWords.forEach((number, index) => {
    let pattern = new RegExp(number, 'gi');
    message = message.replace(pattern, (index).toString());
  })

  console.log(message);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."