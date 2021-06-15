function displayAge() {
  let min = Math.ceil(20);
  let max = Math.floor(200);
  let randomAge = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(`Teddy is ${randomAge} years old!`);
}

displayAge();