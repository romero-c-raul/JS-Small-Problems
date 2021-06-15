function sequence(number) {
  let allIntegers = [];

  for(let index = 1; index <= number; index += 1 ) {
    allIntegers.push(index);
  }

  return allIntegers;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]