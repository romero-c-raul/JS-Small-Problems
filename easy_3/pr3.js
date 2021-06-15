let rlSync = require('readline-sync');

let currentYear = (new Date).getFullYear();
let currentAge = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('At what age would you like to retire? ');

let yearsToRetirement = retirementAge  - currentAge;

console.log('');
console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetirement}`);
console.log(`You only have ${yearsToRetirement} years to work!`);