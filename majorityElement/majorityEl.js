/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
  Input: nums = [3,2,3]
  Output: 3

Example 2:
  Input: nums = [2,2,1,1,1,2,2]
  Output: 2

Constraints:
  n == nums.length
  1 <= n <= 5 * 104
  -231 <= nums[i] <= 231 - 1

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//Using the Boyer-Moore Voting Algorithm:
 var majorityElement = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      count = nums[i];
    }
    nums[i] === count ? count++ : count--;
  }
  return count;
};


/*
//another way to write the solution
var majorityElement = (nums) => {
  let majorityElement = 0, counter = 0;
  for (let num of nums) {
    if (counter === 0) majorityElement = num;
    majorityElement === num ? counter++ : counter--;
  }
  return majorityElement;
}
*/