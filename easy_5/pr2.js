function doubleConsonants(string) {
  let characters = string.split('');
  let doubleArray = [];

  for(let index = 0; index < characters.length; index += 1) {
    let currentChar = characters[index];

    if (/[A-Za-z]/.test(currentChar)) {
      if (/[aeiouAEIOU]/.test(currentChar)) {
        doubleArray.push(currentChar);
        continue;
      }

      doubleArray.push(currentChar, currentChar);
      continue;
    }

    doubleArray.push(currentChar);
  }
  console.log(doubleArray.join(''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""