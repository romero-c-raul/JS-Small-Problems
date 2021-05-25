function stringy(integer) {
  let binary = '';
  let nextChar = '1';

  for(i = 1; i <= integer; i += 1) {
    binary += nextChar
    nextChar = nextChar === '1' ? '0' : '1';
  }

  console.log(binary);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"