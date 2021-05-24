// let rlSync = require('readline-sync');

// int = rlSync.question('Please enter an integer greater than 0: ');
// computation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

// let startingNumber;

// if (computation === 's') {
//   startingNumber = 0;
// } else if (computation === 'p') {
//   startingNumber = 1;
// }

// let total = startingNumber

// for(let i = startingNumber; i <= int; i += 1) {
//   if (computation === 's') {
//     total += i;
//   } else if (computation === 'p') {
//     total *= i;
//   }
// }

// Further Exploration

function computeSum(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

function computeProduct(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
}

function obtainTotal(arr) {
  let rlSync = require('readline-sync');
  let computation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  let result;

  if (computation === 's') {
    result = computeSum(arr);
  } else if (computation === 'p') {
    result = computeProduct(arr);
  }

  console.log(result);
}

obtainTotal([1, 2, 3, 4, 5, 6]);