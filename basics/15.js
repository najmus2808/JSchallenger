// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// My Solution:
function myFunction(a) {
  return a.toString().split(".").length < 2;
}

// Author Solution:
function myFunction(a) {
  return a - Math.floor(a) === 0;
}

// Test Cases:
// myFunction(4)      - Expected  : true
// myFunction(1.123)  - Expected  : false
// myFunction(1048)   - Expected  : true
// myFunction(10.48)  - Expected  : false
