/*
PROBLEM
  - Write a program that takes one argument, the total number of switches, and returns an array
    of the lights that are on after n repetitions

Input: Integer, represents the number of switches
Output: Output, array with the lights that were left on

RULES
  - Explicit rules
    - At the start, every switch is connected to exactly one light that is initally off
    - First pass, you toggle all the switches
    - Second pass, you start from the second switch and toggle every 2nd  switch
    - Third pass, you start from the third switch and toggle every 3rd switch
    - Continue after we have gone through n repetitions, which is the total number of 
      switches
        - If n is 5, on you last repetition you start from the 5th switch, and toggle every
          5th switch

EXAMPLES
  - Base Case / Happy Path
    - Have an integer as an input
      - Even integer
      - Odd integer
      - Integers that have more than 1 digit
    
  - Edge Cases
    - What happens if we have zero?
    - What happens if we have a negative number?
    - Consider string representation of numbers?
    - Empty argument?

DATA STRUCTURES
  - Arrays
    - Store the "switches"
    - Transform the status of the switch after each toggle (ON/OFF)
      - Using map?

ALGORITHM
  - Make sure we have valid input
  - Create an array with the same number of elements as the given input number
    - The elements in this array will be boolean true
      - false represents a switch that is off, true represents a switch that is on
  
  - Iterate from 1 to the given input
    - For each given input, we will transform only the elements (opposite boolean) that 
      are divisible by the outer number
      - First pass, only transform elements that are div by 1
      - 2nd pass, only transform elements that are div by 2
      - 3rd pass, only transform elements that are div by 3 etc...

  - Transform the array into subarrays with their boolean and index
    - filter out the subarray values that contain false
  - Transform and return only the index values in an array
*/


function lightsOn(switches) {
  if (switches < 1) return [];
  
  let switchStatus = new Array(switches).fill(false);

  for(let position = 1; position <= switches; position += 1) {
    switchStatus = switchStatus.map((currentSwitch, index) => {
      if ((index + 1) % position === 0) {
        return !currentSwitch;
      } else {
        return currentSwitch;
      }
    })
  }

  switchStatus = switchStatus.map((switchStatus, index) => [switchStatus, index + 1]);
  
  let onlyOnSwitches = switchStatus.filter(subarray => subarray[0]);
  return onlyOnSwitches.map(subarray => subarray[1]);
}

console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(-5)) // []
