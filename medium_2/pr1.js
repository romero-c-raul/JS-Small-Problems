/*
Input: String
Output: Object with three key-value pairs: lowercase, uppercase and neither

RULES
  - Explicit rules
    - The three properties in the returned object are:
      - The percentage of characters in the string that are lowercase
      - The percentage of characters in the string that are uppercase
      - The percent of character in the stirng that are neither
    - Assume string contains at least one character
`
EXAMPLES
  - Base Case
    - Mix of uppercase, lowercase, numbers, and special characters
    - Letters only
    - Numbers and special chars only
    
  - Edge Cases
    - Empty string
    - Argument passed is something other than a string

MENTAL MODEL
  - To obtain the percentage, we need the total number of characters in the string, meaning
    the length
  - Divide the the percentages (upper, lower, other) by the length of the string and multiply by 100

ALGORITHM
  - Given a string
  - Creater a lowercase, uppercase, and neither letter counter
  - Split string into individual characters and iterate through all of them
    - If you encounter a lowercase char, increase lowercase counter by 1
    - If you encounter an uppercase char, increase uppercase counter by 1
    - Else increase neither counter by 1

  - Create an object with three key value pairs:
    - lowercase: (lowercase counter / string size * 100).toFixed(2)
    - uppercase: (uppercase counter / string size * 100).toFixed(2)
    - neither: (neither counter / string size * 100).toFixed(2)

  - Return object
*/

function letterPercentages(string) {
  let lowerCounter = 0;
  let upperCounter = 0;
  let neitherCounter = 0;

  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      lowerCounter += 1;
    } else if (/[A-Z]/.test(char)) {
      upperCounter += 1;
    } else {
      neitherCounter += 1;
    }
  })

  return {
    lowercase: (lowerCounter / string.length * 100).toFixed(2),
    upperCounter: (upperCounter/ string.length * 100).toFixed(2),
    neitherCounter: (neitherCounter/ string.length * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }