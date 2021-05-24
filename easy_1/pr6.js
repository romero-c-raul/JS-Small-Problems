function shortLongShort(str1, str2) {
  let shortString;
  let longString;

  [longString, shortString] = str2.length > str1.length ? [str2, str1] : [str1, str2];

  console.log(shortString + longString + shortString);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"