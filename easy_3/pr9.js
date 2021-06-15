/*
input: string
output: object

RULES
  - Explicit rules
    - Write a function that takes a string consisting of one or more space separated words
      - It returns an object that shows the number of words of different sizes
      - Words consist of any sequence of non-space characters

DATA STRUCTURES
  - Strings
  - Arrays
  - Objects

ALGORITHM
- Create an empty object
- Split the string into individual words, creating a new array

- Iterate through each element in the array:
  - For each element, obtain its length
  - Check if a property name already exists with the same value as the element length
    - If it does, increase the value associated with that key by 1
    - If it does not, create the key with an initial value of 1

- Return object
*/

function wordSizes(string) {
  let wordSizeCount = {}
  if (string === '') return wordSizeCount;

  let splitString = string.split(' ')

  splitString.forEach(substring => {
    let elementLength = substring.length;

    if (wordSizeCount[elementLength]) {
      wordSizeCount[elementLength] += 1;
    } else {
      wordSizeCount[elementLength] = 1;
    }
  })

  return wordSizeCount;
}

console.log(wordSizes('Four score and seven.'));      // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}