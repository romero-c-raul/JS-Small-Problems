function leadingSubstrings(string) {
  let substringCollection = [];

  string.split('').reduce((string, character) => {
    let newSubstring = string += character;
    substringCollection.push(newSubstring);
    
    return newSubstring;
  }, '')

  return substringCollection;
}

function substrings(string) {
  return string.split('')
               .map((char, index) => leadingSubstrings(string.slice(index)))
               .flat();
}

function palindromes(string) {
  return substrings(string).filter(substring => {
    let reverseSubstring = substring.split('').reverse().join('');
    
    if (substring.length > 1) {
      return substring === reverseSubstring;
    }
  })
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
