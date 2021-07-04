function leadingSubstrings(string) {
  let substringCollection = [];

  string.split('').reduce((string, character) => {
    let newSubstring = string += character;
    substringCollection.push(newSubstring);
    
    return newSubstring;
  }, '')

  return substringCollection;
}

// function substrings(string) {
//   let allSubstrings = [];

//   for(let index = 0; index < string.length; index += 1) {
//     let currentSubstring = string.slice(index);
//     allSubstrings = allSubstrings.concat(leadingSubstrings(currentSubstring));
//   }

//   return allSubstrings;
// }

function substrings(string) {
  return string.split('')
               .map((char, index) => leadingSubstrings(string.slice(index)))
               .flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]