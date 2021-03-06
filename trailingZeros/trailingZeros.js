/*
Given an integer n, return the number of trailing zeroes in n!.
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:
  Input: n = 3
  Output: 0
  Explanation: 3! = 6, no trailing zero.

Example 2:
  Input: n = 5
  Output: 1
  Explanation: 5! = 120, one trailing zero.

Example 3:
  Input: n = 0
  Output: 0

Constraints:
  0 <= n <= 104
  */

/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function(n) {
//   let count = 0;
//   let nStr = factorial(n).toString();
//   for (i = nStr.length - 1; i >= 0; i--) {
//     if (nStr[i] === '0') {
//       count++;
//     } else {
//       break;
//     }
//   }
//   return count;
// };

// const factorial = n => {
//   return n ? n * factorial(n - 1) : 1;
// }

var trailingZeroes = function(n) {
  let zeroCount = 0;
  while(n > 0) {
      n = Math.floor(n / 5);
      zeroCount += n;
  }
  return zeroCount;
};