function isPalindromicNumber(number) {
  let stringEquivalent = String(number);
  return stringEquivalent === stringEquivalent.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
