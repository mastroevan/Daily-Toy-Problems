/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Example 1:
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
  Input: nums = [1]
  Output: 1

Example 3:
  Input: nums = [5,4,-1,7,8]
  Output: 23

Constraints:
  1 <= nums.length <= 105
  -104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// var maxSubArray = function (nums) {
//   let sum = 0;
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     max = Math.max(max, sum);
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return max;
// };


//optimized solution:
const maxSubArray = nums => {
  if (nums.length === 0) return 0;
  let result = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(sum, result);
    sum = sum < 0 ? 0 : sum;
  }
  return result;
}