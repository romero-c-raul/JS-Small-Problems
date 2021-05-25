function cleanUp(string) {
  let cleanString = '';

  for(let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];

    if (!/[a-zA-Z]/.test(currentChar)) {
      currentChar = ' '
    }

    if (currentChar === ' ' && cleanString[cleanString.length - 1] === ' ') {
      continue;
    }

    cleanString += currentChar;
  }

  console.log(cleanString);
}

cleanUp("---what's my +*& line?");    // " what s my line "