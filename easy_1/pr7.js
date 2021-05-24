/**
 
PROBLEM DOMAIN
  - Leap year if:
    - Year divisible by 4 but NOT by 100
    - Year divisible by 500 AND 

 */

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(true);
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    console.log(true)
    return true;
  }

  console.log(false);
  return false;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true