// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// My Solution:
function myFunction(str) {
  return str.slice(str.length - 3);
}

// Author Solution:
function myFunction(str) {
  return str.slice(-3);
}
