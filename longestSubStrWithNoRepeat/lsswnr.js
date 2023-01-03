/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let i = 0;
    let j = 0;
    let n = s.length;
    let set = new Set();
    while (i < n && j < n) {
        let char = s.charAt(j);
        if (!set.has(char)) {
            set.add(char);
            j++;
            count = Math.max(count, j - i);
        } else {
            set.delete(s.charAt(i));
            i++;
        }
    }
    return count;
};