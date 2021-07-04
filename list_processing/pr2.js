/*
ALGORITHM
  - Sort each digit based on its letter equivalent
  - Create a collection that contains the numbers as keys, and the letter equivalent as
    values
 */

let NUMBERS_AND_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                       'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                       'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(index1, index2) {
  let firstWord = NUMBERS_AND_WORDS[index1];
  let secondWord = NUMBERS_AND_WORDS[index2];

  if (firstWord > secondWord) {
    return 1
  } else if (firstWord === secondWord) {
    return 0
  } else if (firstWord < secondWord) {
    return -1
  }
}

function alphabeticNumberSort(array) {
  let sortedArray;

  // sortedArray = array.slice().sort((index1, index2) => {
  //   let firstWord = NUMBERS_AND_WORDS[index1];
  //   let secondWord = NUMBERS_AND_WORDS[index2];

  //   if (firstWord > secondWord) {
  //     return 1
  //   } else if (firstWord === secondWord) {
  //     return 0
  //   } else if (firstWord < secondWord) {
  //     return -1
  //   }
  // })

  sortedArray = array.slice().sort(wordSort);
  return sortedArray;
}

 console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]