/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
  if (s.length == 0) return -1;
  let newS = s.split("");

  for (let i = 0; i < newS.length; i++) {
      if (newS[i] !== newS[i + 1] && occurs(s, newS[i]) === 1) {
          return newS.indexOf(newS[i]);
      } else if (!newS[i + 1]) {
          return -1;
      }
  }
};

const occurs = function (string, searchFor) {
 var position = string.indexOf(searchFor);
  let count = 0;
  while (position > -1) {
      ++count;
      position = string.indexOf(searchFor, ++position);
      if(count > 1) break;
  }
  return count;
};