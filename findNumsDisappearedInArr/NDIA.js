
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
  Input: nums = [4,3,2,7,8,2,3,1]
  Output: [5,6]
Example 2:
  Input: nums = [1,1]
  Output: [2]
Constraints:
  n == nums.length
  1 <= n <= 105
  1 <= nums[i] <= n

  Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
   //create a result arr
   let result = [];
  //create a tacking arr container
  let trackingArr = [];
  //trackingArr length is the same as nums length
  trackingArr.length = nums.length;
  //iterate over nums- for loop, i is 0, i++
  for (let i = 0; i < nums.length; i++) {
    //trackingArr's index -1 is equal to  current int in nums
    trackingArr[nums[i] - 1] = nums[i];
  }
  //iterate over trackingArr i is 0, i++
  for (let i = 0; i  < trackingArr.length; i++) {
    //if (current int in trackingArr is undefined)
    if (!trackingArr[i]) {
      //push i+ 1 into result
      result.push(i+1);
    }
  }
  //return result
  return result;
 }