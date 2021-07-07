function isUppercase(string) {
  console.log(string === string.toUpperCase());
}

function isUpperCase(string) {
  return !/[a-z]/.test(string)
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true