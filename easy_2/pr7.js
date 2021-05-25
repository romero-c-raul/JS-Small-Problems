/*
ALGORITHM
  - Determine if number is of even length
    - If it is, split it and half and compare the first half with the second half
      - If it is a double number, return as is
      - If it is not a double number, multipy by two and return

*/

function isDoubleNumber(string) {
  let stringLength = string.length;
  let firstHalf = '';
  let secondHalf = '';

  for(let index = 0; index < stringLength / 2; index += 1) {
    firstHalf += string[index];
  }

  for(let index = stringLength - 1; index >= stringLength / 2; index -= 1) {
    secondHalf += string[index];
  }

  return firstHalf === secondHalf.split('').reverse().join('');
}


function twice(integer) {
  let stringEquivalent = String(integer);

  if (stringEquivalent.length % 2 === 0) {
    if (isDoubleNumber(stringEquivalent)) {
      return integer;
    } else {
      return integer * 2;
    }
  } else {
    return integer * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

