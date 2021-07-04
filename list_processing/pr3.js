function multiplyAllPairs(arr1, arr2) {
  let productOfCombinations = [];

  // for(let idx = 0; idx < arr1.length; idx += 1) {
  //   for (let jdx = 0; jdx < arr2.length; jdx += 1) {
  //     productOfCombinations.push(arr1[idx] * arr2[jdx]);
  //   }
  // }

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      productOfCombinations.push(num1 * num2);
    })
  })

  return productOfCombinations.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]