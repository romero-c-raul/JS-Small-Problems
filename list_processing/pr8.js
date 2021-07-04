function buyFruit(array) {
  let newCollection = [];

  array.forEach(subarray => {
    for(let total = 1; total <= subarray[1]; total += 1) {
      newCollection.push(subarray[0]);
    }
  })

  return newCollection;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]