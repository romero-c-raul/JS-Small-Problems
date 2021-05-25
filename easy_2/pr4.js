function findFibonacciIndexByLength(length) {
  let fibonacciSequence = [1, 1];

  let previousNumber = fibonacciSequence[0];
  let currentNumber = fibonacciSequence[1];
  let nextNumber

  do {
    nextNumber = previousNumber + currentNumber;
    fibonacciSequence.push(nextNumber);
    [previousNumber, currentNumber] = [currentNumber, nextNumber]

    if (String(currentNumber).length >= length) { // if current number is the length we need, break
      break;
    } 
  } while (true);

  console.log(fibonacciSequence.length);
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;
