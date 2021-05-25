function crunch(string) {
  let noDuplicates = '';

  for(let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];

    if (noDuplicates[noDuplicates.length - 1] === currentChar) {
      continue;
    }
    
    noDuplicates += currentChar;
  }

  console.log(noDuplicates);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""