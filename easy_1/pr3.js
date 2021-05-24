let rlSync = require('readline-sync');

let length = rlSync.question('Enter the length of the room in meters: ');
let width = rlSync.question('Enter the width of the room in meters: ')

let areaInMeters = length * width;
let areaInFeet = areaInMeters * 10.7639;
message = `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
console.log(message);