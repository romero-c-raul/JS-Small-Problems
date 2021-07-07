/*
ALGORITHM
  - Go through each character in input string
    - If character is a lower case letter, increase lowercase count by 1
    - If character is an uppwe case letter, increase uppercase count by 1
    - else increase neither counter by 1
*/

function letterCaseCount(string) {
  let stringTally = {lowercase: 0, uppercase: 0, neither: 0};

  for(let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (/[a-z]/.test(char)) {
      stringTally.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      stringTally.uppercase += 1;
    } else {
      stringTally.neither += 1;
    }
  }

  return stringTally;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }