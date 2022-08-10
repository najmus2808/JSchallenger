// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

// My Solution:
function myFunction(a, n) {
  return a.split("")[n - 1];
}

// Author Solution:
function myFunction(a, n) {
  return a[n - 1];
}

// Test Cases:
// myFunction('abcd',1)     - Expected : 'a'
// myFunction('zyxbwpl',5)  - Expected : 'w'
// myFunction('gfedcba',3)  - Expected : 'e'
