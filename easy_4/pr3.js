/*
input: array
output: nested array (two elements)

RULES
  Explicit rules
    - Write a function that takes an array as an argument and returns an array that contains
      two elements, each of which is an array
        - Put the first half of the original array elements in the first element
        - Put the second half in the second element
        - If the original array contains an odd number of elements, place the middle
          element in the first array

  Implicit rules
    - Input array with one element returns [[element], []]
    - Input array that is empty returns [[], []]

DATA STRUCTURES
  - Arrays

ALGORITHM
  - Determine if input array length is even or odd
    - If the length is even: 
      - We will iterate from 0 to (array length / 2) - 1 for the first half
      - We will iterate from (array length / 2) to final index for the second half

    - If the length is odd:
      - We will iterate from 0 to (array length / 2) and round down for first half
      - We will iterate from (array length / 2) and round up to last index for second half
  - All elements will be added into two different arrays
  - Arrays will be returned inside an array
*/    

function halvsies(array) {
  if (array.length === 1) {
    return [[array[0]], []];
  } else if (array.length === 0) {
    return [[], []];
  }

  if (array.length % 2 === 0) {
    return splitEvenArray(array);
  } else {
    return splitOddArray(array);
  }
}

function splitEvenArray(array) {
  let firstHalf = [];

  for(let index = 0; index <= (array.length / 2) - 1; index += 1) {
    firstHalf.push(array[index]);
  }

  let secondHalf = [];
  for(let index = array.length / 2; index < array.length; index += 1) {
    secondHalf.push(array[index]);
  }

  return [firstHalf, secondHalf];
}

function splitOddArray(array) {
  let firstHalf = [];
  for(let index = 0; index <= Math.floor(array.length / 2); index += 1) {
    firstHalf.push(array[index]);
  }

  let secondHalf = [];
  for(let index = Math.ceil(array.length / 2); index < array.length; index += 1) {
    secondHalf.push(array[index]);
  }

  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]