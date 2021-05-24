function utf16Value(string) {
  let total = 0;

  for(let i = 0; i < string.length; i += 1) {
    currentChar = string[i]
    total += currentChar.charCodeAt();
  }

  console.log(total);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
