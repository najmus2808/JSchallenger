function isPrime(n) {
  // Corner case
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false;

  return true;
}

function myFunction(a) {
  let isPermitted = false;
  let result = a;
  if (isPrime(a)) {
    return a;
  } else {
    while (!isPermitted) {
      isPermitted = isPrime(result + 1);
      result++;
    }
  }
  return result;
}

console.log(myFunction(7));
