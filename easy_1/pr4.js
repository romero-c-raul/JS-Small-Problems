let rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question('What is the bill? '), 10);
let tipPercent = parseFloat(rlSync.question('What is the tip percentage? '));

let totalTip = bill * (tipPercent / 100);
let total = bill + totalTip;

console.log(`The tip is $${totalTip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);