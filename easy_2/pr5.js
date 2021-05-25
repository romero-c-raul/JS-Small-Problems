function triangle(number) {
  let spaceCount = number - 1;
  let asteriskCount = 1;

  do {
    let totalSpaces = ' '.repeat(spaceCount);
    let totalAsterisks = '*'.repeat(asteriskCount);

    console.log(totalSpaces + totalAsterisks);

    spaceCount -= 1;
    asteriskCount += 1;
  } while (asteriskCount <= number);
}

triangle(5);
triangle(9);
