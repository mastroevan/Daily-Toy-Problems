/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
//  var validMountainArray = function(A) {
//   if(A.length < 3) {
//       return false;
//   }
//   let max = [0,0];
//   for(let i = 0; i < A.length; i++) {
//       if(A[i] > max[1]) {
//           max[0] = i;
//           max[1] = A[i];
//       }
//   }
//   if(max[0] == 0 || max[0] == A.length - 1){
//       return false;
//   }
//   for(let i = 0; i < max[0]; i++) {
//       if(A[i] >= A[i + 1]) {
//           return false;
//       }
//   }

//   for(let i = max[0] + 1; i < A.length; i++) {
//       if(A[i - 1] <= A[i]) {
//           return false;
//       }
//   }
//   return true;
// };


//one pass solution
var validMountainArray = function(A) {
  const n = A.length;
  if (n < 3) return false;
  let i = 1;
  let rise = false;
  let drop = false;
  while (A[i - 1] < A[i]) {
    i++;
    rise = true;
  }
  if (A[i - 1] === A[i]) return false;
  while (A[i - 1] > A[i]) {
    i++;
    drop = true;
  }
  return i === n && rise && drop;
};