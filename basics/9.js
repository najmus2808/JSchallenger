// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// My Solution:
function myFunction(a) {
  return a.slice(0, a.length - 3);
}

// Author Solution:
function myFunction(a) {
  return a.slice(0, -3);
}
