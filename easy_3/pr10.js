function wordSizes(string) {
  string = string.replace(/[^A-Za-z ]/g, '');

  let wordSizeCount = {}
  if (string === '') return wordSizeCount;

  let splitString = string.split(' ')

  splitString.forEach(substring => {
    let elementLength = substring.length;

    if (wordSizeCount[elementLength]) {
      wordSizeCount[elementLength] += 1;
    } else {
      wordSizeCount[elementLength] = 1;
    }
  })

  return wordSizeCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}