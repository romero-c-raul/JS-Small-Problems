/*
PROBLEM
  - Write a function that rotates an array by removing the first element to the end of the array. 
    Do not modify original array

Input: array
Output: rotated array

RULES
  Explicit Rules:
    - Move the first element to the end of the array
    - If the input is not an array, return undefined
    - If the input is an empty array, return an empty array
    - Do not modifty original array

EXAMPLES
  - Array of several elements as an input
  - Empty Array
  - Array with one element
  - Input other than array

DATA STRUCTURES
  - Arrays

ALGORITHM
  - Select all elements in the array from index 1 to last index
  - Append the first element in the array to the selected elements array

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length <= 1) {
    return [];
  }

  let remainingElements = arr.slice(1);
  remainingElements.push(arr[0]);

  return remainingElements;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]