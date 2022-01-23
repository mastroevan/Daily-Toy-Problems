/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

Example 1:
  Input: nums = [4,2,3]
  Output: true
  Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

Example 2:
  Input: nums = [4,2,1]
  Output: false
  Explanation: You can't get a non-decreasing array by modify at most one element.

Constraints:
  n == nums.length
  1 <= n <= 104
  -105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var checkPossibility = function(nums) {
  let onceFailed = false;
  return nums.every((num, idx) => {
    const next = nums[idx + 1] || Infinity;
    const prev = nums[idx-1] || -Infinity;
    if (num >= prev && num <= next) return true;
    if (onceFailed) return false;
    next >= prev ? nums[idx] = next : nums[idx+1] = num;
    onceFailed = true;
    return true;
  });
};