function countOccurrences(arr) {
  let vehicleCount = {};

  for(let index = 0; index < arr.length; index += 1) {
    let currentElement = arr[index];

    if (vehicleCount[currentElement]) {
      vehicleCount[currentElement] += 1;
    } else {
      vehicleCount[currentElement] = 1;
    }
  }

  vehicleCount = Object.entries(vehicleCount);
  vehicleCount.forEach(subarray => console.log(`${subarray[0]} => ${subarray[1]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles))