// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

// My Solution:
function myFunction(a) {
  return a
    .toString()
    .split("")
    .map((str) => Number(str));
}

// Author Solution:
function myFunction(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

// Test Cases:
// myFunction(10)      - Expected  : [1,0]
// myFunction(931)     - Expected  : [9,3,1]
// myFunction(193278)  - Expected  : [1,9,3,2,7,8]
