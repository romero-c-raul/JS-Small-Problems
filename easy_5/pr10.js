function reverseWords(string) {
  let wordCollection = string.split(' ');
  let reversedCollection; 

  reversedCollection = wordCollection.map(substring => {
    if (substring.length >= 5) {
      return substring.split('').reverse().join('');
    } else {
      return substring;
    }
  })

  return reversedCollection.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"