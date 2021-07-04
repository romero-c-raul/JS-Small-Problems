/*
ALGORITHM
  - Split array into leading sequence subarrays
    - Each subarray will contain only the preceding numbers as well as the current number
  - Transform each subarray into its total
  - Transform whole array into its total
 */

function sumOfSums(array) {
  let subarrays = [];

  for(let index = 1; index <= array.length; index += 1) {
    let currentSubarray = array.slice(0, index)
    subarrays.push(currentSubarray);
  }

  let reducedSubarrays = subarrays.map(subarray => {
    return subarray.reduce((total, value) => total += value);
  })

  let total = reducedSubarrays.reduce((total, value) => total += value);
  
  return total;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35