function average(array) {
  let sum = 0;

  for(let index = 0; index < array.length; index += 1) {
    sum += array[index]
  }

  return Math.floor(sum / array.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40