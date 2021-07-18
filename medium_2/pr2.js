/*
PROBLEM
  - Write a function that takes the lengths of the three sides of a triangle as arugments
    and returns its classification

input: integer, integer, integer
output: string (equilateral, isosceles, scalene, or invalid)

RULES
  - Explicit Rules:
    - Valid triangle:
      - Sum of lengths of the two shortest sides must be greater than the length of the
        longest side
      - Every side must have a length greater than 0

    - Equilateral: all three sides are equal length
    - Isosceles: Two sides are of equal length, while the third is different
    - Scalene: All three sides have different lengths

EXAMPLES
  - Base Case
    - equilateral (all sides same)
    - isosceles (two sides same, one different)
    - scalene (all sides different)

    - Edge case
      - one 0 is passed as argument
      - The sum of the two shortest sides is less that the longest side
      - empty argument

DATA STRUCTURES
  - Arrays
    - Store the elements so we can more easily iterate through them

ALGORITHM
  - Given 3 integer
  - Store integers in array and sort in ascending order

  - Validate whether the triangle is valid
    - Sum the last two elements and check that they are greater than the first element
    - Check that none of these elemets are 0

  - Create a collection to store repeated digits
  - Iterate throught the sorted array, and for each element
    - If the repeated digits array already contains the element, continue
    - If not, add the number to the repeated digits
*/

function invalidTriangle(sortedArray) {
  if (sortedArray.includes(0) || sortedArray.length === 0) return true;

  return sortedArray[0] > sortedArray.slice(-2)
                                     .reduce((total, value) => total + value);
}

function triangle(side1, side2, side3) {
  let sortedSides = [...arguments].sort((a, b) => b - a);
  let repeatedValues = [];

  if (invalidTriangle(sortedSides)) return 'invalid';

  sortedSides.forEach(side => {
    if (!repeatedValues.includes(side)) {
      repeatedValues.push(side);
    }
  })

  switch (repeatedValues.length) {
    case 3:
      return 'scalene';
    case 2:
      return 'isosceles';
    case 1: 
      return 'equilateral';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle());               // "invalid"