// function leadingSubstrings(string) {
//   let substringCollection = [];

//   for(let totalChars = 1; totalChars <= string.length; totalChars += 1) {
//     let currentSubstring = string.slice(0,totalChars);
//     substringCollection.push(currentSubstring);
//   }

//   console.log(substringCollection);
// }

function leadingSubstrings(string) {
  let substringCollection = [];

  string.split('').reduce((string, character) => {
    let newSubstring = string += character;
    substringCollection.push(newSubstring);
    
    return newSubstring;
  }, '')

  return substringCollection;
}

// function leadingSubstrings(string) {
//   return string.split('').map((char, index) => {
//     return string.slice(0, index + 1);
//   })
// }

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]