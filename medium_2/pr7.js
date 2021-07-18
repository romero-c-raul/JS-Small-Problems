/*
PROBLEM
  - Write a function that takes an array as an argument and sorts that array
    using the bubble sort algorithm
  
Inputs: array
Output: array

RULES
  - Explicit Rules:
    - Bubble Sort:
      - On each pass, the two value pairs of each consecutive elements are compares
        - If the first value is greater than the second value, swap the values
      - Process is completed once a complete pass is performed without performing
        any swaps
        - This means the array is completely sorted
      - Sort in ascending order
  - Implicit Rules
    - Should work with numbers and strings as array elements

EXAMPLES
  - Base Case / Happy Path
    - Array of numbers as input
    - Array of strings as input
    - Try varying lengths of arrays
    - Array of numbers and strings

  - Edge Cases
    - Empty array
    - Empty input
    - Another data type as input

DATA STRUCTURES
  - Arrays

ALGORITHM  
  - Given an array with elements (numbers or strings)
  - Create a loop
    - Create a flag that tells us if the array is fully sorted 
      (Set the flag to true to start with)

    - Iterate through every element in the array
      - If the current element of the array is greater than the next element
        - Swap the elements
        - Set flag to false

    - Break out of loop is false is true
      - This means that there were no swaps in the last iteration
*/

function bubbleSort(array) {
  let fullySortedArray;

  do {
    fullySortedArray = true;

    for(let index = 0; index < array.length; index += 1) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        fullySortedArray = false;
      }
    }
    
  } while (fullySortedArray === false);

  return array;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]