/*
You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed). There is at least one empty seat, and at least one person sitting. Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
Return that maximum distance to the closest person.

Example 1:
  Input: seats = [1,0,0,0,1,0,1]
  Output: 2
  Explanation:
    If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
    If Alex sits in any other open seat, the closest person has distance 1.
    Thus, the maximum distance to the closest person is 2.

Example 2:
  Input: seats = [1,0,0,0]
  Output: 3
  Explanation:
    If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
    This is the maximum distance possible, so the answer is 3.

Example 3:
  Input: seats = [0,1]
  Output: 1

Constraints:
  2 <= seats.length <= 2 * 104
  seats[i] is 0 or 1.
  At least one seat is empty.
  At least one seat is occupied.
*/

/**
 * @param {number[]} seats
 * @return {number}
 */
/*
 var maxDistToClosest = function(seats) {
  let max = 0, count = 0, seated = false;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      max = seated ? Math.max(max, count/2) : Math.max(max, count)
      seated = true;
      count = 0;
    } else {
      count++;
    }
  }
  return Math.max(count, max);
};
*/

//Refactored Solution:
function maxDistToClosest(seats) {
  let left = seats.indexOf(1);
  let max = left;
  for (let right = left + 1; right < seats.length; right++) {
    if (seats[right] === 0) {
      continue;
    }
    [max, left] = [Math.max(max, ((right - left) / 2) | 0), right];
  }
  return Math.max(max, seats.length - left - 1);
}