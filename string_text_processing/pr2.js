// Using Regex
function removeVowels(array) {
  return array.map(string => {
    return string.replace(/[aeiou]/gi, '');
  })
}

// Using transformation
let VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(array) {
  let splitChars = array.map(string => string.split(''))
  
  return splitChars.map(subarray => {
    return subarray.map(char => {
      if (VOWELS.includes(char.toLowerCase())) {
        return ''
      } else {
        return char;
      }
    }).join('')
  })
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]