// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

// My Solution:
function myFunction(a, b) {
  let str =
    a.replace("%", "") + b.replace("%", "").split("").reverse().join("");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Author Solution:
function myFunction(a, b) {
  const func = (x) => x.replace("%", "");
  const first = func(a);
  const second = func(b).split("").reverse().join("");
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

// Test Cases:
// myFunction('java', 'tpi%rcs')   - Expected  : 'Javascript'
// myFunction('c%ountry', 'edis')  - Expected  : 'Countryside'
// myFunction('down', 'nw%ot')     - Expected  : 'Downtown'
