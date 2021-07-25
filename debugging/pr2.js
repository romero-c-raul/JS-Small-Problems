const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  // RESERVED_KEYWORDS.forEach(reserved => {
  //   if (name === reserved) {
  //     return true;
  //   }
  // });

  for(let index = 0; index < RESERVED_KEYWORDS.length; index += 1) {
    if (RESERVED_KEYWORDS[index] === name) {
      return true;
    }
  }

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

// The issue is that we are using forEach. We cannot break
// out of a forEach iteration early, we must iterate through all elements.
// A for loop would be better for this problem