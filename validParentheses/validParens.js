/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.

Example 1:
  Input: s = "()"
  Output: true

Example 2:
  Input: s = "()[]{}"
  Output: true

Example 3:
  Input: s = "(]"
  Output: false

Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
//  var isValid = function(s) {
//   const stack = []
//   for (const c of s) {
//     if (c === '{' || c === '[' || c === '(') {
//       stack.push(c);
//     } else {
//       const p = stack.pop();
//       if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')' && p !== '(')) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

let isValid = s => {
  let map = new Map();
  map.set('{', '}');
  map.set('[', ']');
  map.set('(', ')');
  let b = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      b.push(s.charAt(i));
    }
    else {
      let pop = b.pop();
      if (map.get(pop) !== s.charAt(i)) {
        return false;
      }
    }
  }
  return b.length === 0;
}