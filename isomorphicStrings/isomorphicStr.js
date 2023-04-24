/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
  Input: s = "egg", t = "add"
  Output: true


Example 2:
  Input: s = "foo", t = "bar"
  Output: false

Example 3:
  Input: s = "paper", t = "title"
  Output: true

Constraints:
  1 <= s.length <= 5 * 104
  t.length == s.length
  s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// var isIsomorphic = function(s, t) {
//   let obj = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
//     if (!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
//     if (t[i] !== obj['s' + s[i]] || s[i] !== obj['t' + t[i]]) return false;
//   }
//   return true;
// };

// //refactored solution:
// var isIsomorphic = function(s, t) {
//   if (s.length != t.length)
//       return false
//   let m = new Map()
//   for (let i = 0; i < s.length; i++) {
//       if (!m.has(s[i]))
//           m.set(s[i], t[i])
//       else {

//           if (m.get(s[i]) != t[i]) {

//               return false
//           }
//       }
//   }
//   return new Set([...m.values()]).size == m.size
// };

var isIsomorphic = function(s, t) {
  for (let i = 0;  i < s.length;  i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i+1)) {
      return false;
    }
  }
  return true;
}