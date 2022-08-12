// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// My Solution:
function myFunction(a, b) {
  let count = 0;
  b.split("").forEach((c) => {
    if (c === a) {
      ++count;
    }
  });
  return count;
}

// Author Solution:
function myFunction(a, b) {
  return b.split(a).length - 1;
}

// Test Cases:
// myFunction('m', 'how many times does the character occur in this sentence?') - Expected : 2
// myFunction('h', 'how many times does the character occur in this sentence?') -Expected  : 4
// myFunction('?', 'how many times does the character occur in this sentence?') -Expected  : 1
// myFunction('z', 'how many times does the character occur in this sentence?') -Expected  : 0
