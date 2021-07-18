/*
PROBLEM
  - Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that
    year

Input: Integer greater than 1752
Output: Inteer

RULES
  - Explicit Rules:
    - Assume year is greater than 1752
      - Expect gregorian calendar for any years after 1752
    - Return number of Fridays that ocurred on the 13th day of the month

MENTAL MODEL
  - We need to look at every month, from January to December, of the given 
    year
  - For each month, we need to look at 13th day of that month
  - For the 13th day, we check if it that day occurred on a friday

  - If we are given year 1986:
    - We need to iterate through every month Jan - Dec
      - For every month, we need to iterate through every 13th day of the current month
      - Create a new date using '13 currentMonth, Year` format
      - Get the day that date occurred (5 is friday)
        - If it is 5, add it to the `Friday the 13th counter`
        - Else continue

EXAMPLES
  - Base Case
    - Look at years before 2000
    - Look at years after 2000
    - Look at cases where there are no friday 13ths, single friday 13ths, and multiple friday 13ths
  - Edge Cases
    - Empty input
    - Data type that is not integer
    - Year is 1752 or less

DATA STRUCTURES
  - Date
    - Allow us to construct a date object using the day, month, and year. From that we can
      obtain the day of the week that date ocurred in

ALGORITHM
  - Given a year in integer form (a number)
  - Validate the integer
    - If the integer is less or equal to 1752, return 'Invalid year.'
    - If input is empty, return 'Invalid year'
    - If input is not an integer, return 'Invalid year;

  - Create a counter for 'Friday the 13th' days

  - Iterate from numbers 1 - 12
    - For each number, create a date in the following format:
      - '13/currentNumber/givenYear'
    - Obtain the day that date ocurred in (possible using .getDay())
    - If the day is 13, increase counter by 1

  - Return counter
*/

function fridayThe13ths(year) {
  if (typeof year !== 'number' || year <= 1752) return 'Invalid year.'

  let friday13thsCounter = 0;

  for(let currentMonth = 1; currentMonth <= 12; currentMonth += 1) {
    let newDate = new Date(currentMonth.toString() + '/' + '13' + '/' +year.toString());
    
    if (newDate.getDay() === 5) {
      friday13thsCounter += 1;
    }
  }

  return friday13thsCounter;
}

console.log(fridayThe13ths(1500));      // Invalid year.
console.log(fridayThe13ths('1986'));    // Invalid year.
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2