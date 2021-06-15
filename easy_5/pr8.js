function sequence(count, startingNumber) {
  let allMultiples = [];

  for(let index = 1; index <= count; index += 1) {
    allMultiples.push(startingNumber * index);
  }

  console.log(allMultiples);
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []