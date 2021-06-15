function repeater(string) {
  let repeatedString = '';

  for(let index = 0; index < string.length; index += 1) {
    repeatedString += string[index];
    repeatedString += string[index];
  }

  return repeatedString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
