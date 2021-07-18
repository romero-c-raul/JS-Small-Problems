/*
PROBLEM
  - Write a function that takes the three angles of a triangle as arguments and returns its classification

Inputs: integer, integer, integer
Output: string (right, acute, obtuse, invalid)

RULES
  - Explicit Rules
    - Valid triangles:
      - Sum of all angles must be exactly 180 degrees
      - Every angle must be greater than 0
    
    - Triangle classifications:
      - Right: One angle is a right angle (90 deg)
      - Acute: All three angles are less than 90 deg
      - Obtuse: One angle is greater than 90 deg

    - Assume all angles have integer values
    - Assume all arguments are in degrees

EXAMPLES
  - Base Case
    - Right triangle
    - Acute triangle
    - Obtuse triangle
    - Sum of all angles less than 180
    - Sum of all angles is greater than 180
    - At least one angle is less than 0

  - Edge Cases
    - Missing an argument
    - Data type other than number

DATA STRUCTURE
  - Array
    - We can use arrays to reduce values to a single one, and check if all angles are the same

ALGORITHM
  - Given three integers that represent the angles of a triangle
  - Check if triangle is valid:
    - Reduce array by adding up all elements and make sure it is equal to 180
    - Check every angle and make sure they're all greater than 0

  - If every angle is less than 90
    - Return acute
  - Else if there is one angle that is 90
    - Return right
  - Else
    - Return obtuse
*/

function triangle(angle1, angle2, angle3) {
  let anglesArray = [angle1, angle2, angle3]
  let sumOfangles = anglesArray.reduce((total, value) => total + value);
  let zeroesPresent = anglesArray.some(element => element === 0);

  if (sumOfangles !== 180 || zeroesPresent) return 'invalid';

  if (anglesArray.every(angle => angle < 90)) {
    return 'acute';
  } else if (anglesArray.some(angle => angle === 90)) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"