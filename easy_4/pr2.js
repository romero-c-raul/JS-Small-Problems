function union(arr1, arr2) {
  arr2.forEach(element => {
    if (!arr1.includes(element)) {
      arr1.push(element);
    }
  })

  console.log(arr1);
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]