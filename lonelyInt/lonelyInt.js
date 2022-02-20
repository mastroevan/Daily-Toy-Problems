/*
Given an array of integers, where all elements but one occur twice, find the unique element.
Example:
  a = [1, 2, 3, 4, 3, 2, 1]
  The unique element is 4.

Function Description
  Complete the lonelyinteger function in the editor below.
  lonelyinteger has the following parameter(s):
    int a[n]: an array of integers
  Returns
    int: the element that occurs only once
  Input Format
    The first line contains a single integer, n, the number of integers in the array.
  The second line contains  space-separated integers that describe the values in a.

Constraints:
  1 <= n < 100
  guarantee n is odd and there will be only one unique value
  0 <= a[i] <= 100, where 0 <= i < n
*/

function lonelyinteger(a) {
  let intObj = {};
  for (let i = 0; i < a.length; i++) {
    if (intObj[a[i]] === undefined) {
      intObj[a[i]] = 1;
    } else {
      intObj[a[i]]++;
    }
  }
  for (let int in intObj) {
    if (intObj[int] === 1) {
      return int;
    }
  }
}