function between(int, num1, num2) {
  return (int >= num1 && int <= num2);
}

function getGrade(int1, int2, int3) {
  let avg = (int1 + int2 + int3) / 3

  if (between(avg, 90, 100)) {
    return "A"
  } else if (between(avg, 80, 90)) {
    return "B";
  } else if (between(avg, 70, 80)) {
    return "C";
  } else if (between(avg, 60, 70)) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"