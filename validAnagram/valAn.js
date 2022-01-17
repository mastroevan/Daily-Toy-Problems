/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

Example 2:
  Input: s = "rat", t = "car"
  Output: false

Constraints:
  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* ORIGINAL SOLUTION:
 var isAnagram = function(s, t) {
  let sLen = s.length;
  let tLen = t.length;
  if (sLen === 0 || tLen === 0) {
    return false;
  }
  if (sLen !== tLen) {
    return false;
  }
  let sCheck = s.split('').sort().join('')
  let tCheck = t.split('').sort().join('');
  if (sCheck === tCheck) return true;
  return false;
};
*/

//refactor
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let sArr = s.split('').sort();
  let tArr = t.split('').sort();
  let i = 0;
  while (i < s.length) {
      if (sArr[i] !== tArr[i]) return false;
      i++;
  }
  return true;
};