/*
Given an integer n, return the number of prime numbers that are strictly less than n.
Example 1:
Input: n = 10
  Output: 4
  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:
  Input: n = 0
  Output: 0

Example 3:
  Input: n = 1
  Output: 0

Constraints:
  0 <= n <= 5 * 106
*/

/**
 * @param {number} n
 * @return {number}
 */
/* inital attempt: exceeded time limit
 var countPrimes = function(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

const isPrime = x => {
  if (x === 1) {
    return false;
  }
  if (x === 2) {
    return true;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

// the fast solution
const countPrimes = n => {
  if (n === 0|| n === 1) {
    return 0;
  }
  //asumes all numbers are prime
  let nums = new Uint8Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    //if a number is not prime, it breaks out of loop for a single iteration
    if (nums[i]) {
      continue;
    }
    //updates count when it iterates on a prime num(a 0 in the array)
    count++;
    //traverses arr in steps equal to current prime num, and updates arr with all of its multiples
    for (let x = i**2; x<n; x=x+i) {
      nums[x] = 1;
    }
  }
  return count;
}
*/

const countPrimes = (n) => {
  let count = 0;
  const isPrime = Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
      for (let j = i; j < n; j += i) isPrime[j] = false; // sieve out multiples
    }
  }
  return count;
};