let rlSync = require('readline-sync');

let firstNumber = rlSync.question('Enter the 1st Number: ');
let secondNumber = rlSync.question('Enter the 2nd Number: ');
let thirdNumber = rlSync.question('Enter the 3rd Number: ');
let fourthNumber = rlSync.question('Enter the 4th Number: ');
let fifthNumber = rlSync.question('Enter the 5th Number: ');
let lastNumber = rlSync.question('Enter the last Number: ');

let collection = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];

// if (collection.includes(lastNumber)) {
//   console.log(`The number ${lastNumber} appears in [${collection.join(', ')}].`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in [${collection.join(', ')}].`);
// }

if (collection.some(element => lastNumber > element)) {
  console.log(`The number ${lastNumber} is greater than at least one number in [${collection.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} is less than all numbers in [${collection.join(', ')}].`);
}