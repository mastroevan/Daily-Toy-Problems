/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Example 1:
  Input: flowerbed = [1,0,0,0,1], n = 1
  Output: true

Example 2:
  Input: flowerbed = [1,0,0,0,1], n = 2
  Output: false

Constraints:
  1 <= flowerbed.length <= 2 * 104
  flowerbed[i] is 0 or 1.
  There are no two adjacent flowers in flowerbed.
  0 <= n <= flowerbed.length
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// const canPlaceFlowers = (flowerbed, n) => {
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (!n) return true;
//     if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
//       flowerbed[i] = 1;
//       n--;
//     }
//   }
//   return !n;
// };


//Another Solution:
const canPlaceFlowers = (bed, n) => {
  let zeroes = 1;
  for (let num of bed) {
    if (!n) return true;
    if (!num) {
      zeroes++;
      if (zeroes === 3) {
        n--;
        zeroes = 1;
      }
    } else zeroes = 0;
  }
  if (zeroes === 2) n--;
  return !n;
}