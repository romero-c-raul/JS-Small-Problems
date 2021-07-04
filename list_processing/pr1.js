/*
ALGORITHM
  - Split number by digits
  - Reduce digits to a single number by adding all of them up
 */

function sum(integer) {
  let digits = integer.toString().split('').map(num => Number(num));
  let total = digits.reduce((total, value) => total += value);

  return total;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
