// Using Reduce
function runningTotal(array) {
  let reducedArray = [];

  array.reduce((accumulator, currentValue) => {
    let total = accumulator + currentValue;

    reducedArray.push(total);
    return total;
  }, 0)

  return reducedArray;
}

// Using map
function runningTotal(array) {
  let acc = 0;
  let reducedArray;

  reducedArray = array.map(element => acc += element);

  console.log(reducedArray);
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []