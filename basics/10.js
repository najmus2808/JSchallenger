// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// My Solution:
function myFunction(a, b) {
  return (a * b) / 100;
}

// Author Solution:
function myFunction(a, b) {
  return (b / 100) * a;
}

// Test Cases:
// myFunction(100,50) - Expected : 50
// myFunction(10,1)   - Expected : 0.1
// myFunction(500,25) - Expected : 125
