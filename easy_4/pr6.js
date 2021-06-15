function showMultiplicativeAverage(array) {
  let result;

  result = array.reduce(((accumulator, currentValue) => {
    return accumulator * currentValue;
  }), 1)

  let average = (result / array.length).toFixed(3);
  return String(average);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"