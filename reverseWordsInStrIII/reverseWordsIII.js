/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
  Input: s = "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
  Input: s = "God Ding"
  Output: "doG gniD"

Constraints:
  1 <= s.length <= 5 * 104
  s contains printable ASCII characters.
  s does not contain any leading or trailing spaces.
  There is at least one word in s.
  All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
/*
//INITAL ATTEMPT:
var reverseWords = function(s) {
  const charArr = s.split('');
  let start = 0;
  while (start < charArr.length) {
    const spaceIdx = getSpaceIdx(charArr, start);
    reverseSubArr(charArr, start, spaceIdx - 1);
    start = spaceIdx + 1;
  }
  return charArr.join('');
}

const reverseSubArr = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const getSpaceIdx = (arr, start) => {
  while (arr[start] !== ' ' && start < arr.length) {
    start++;
  }
  return start;
}
*/

var reverseWords = function(s) {
  const resultArr = [];
  const charArr = s.split(' ');
  for (x of charArr) {
    x = x.split('').reverse().join('')
    resultArr.push(x);
  }
  return resultArr.join(" ");
};