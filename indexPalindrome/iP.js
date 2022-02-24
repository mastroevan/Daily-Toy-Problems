function palindromeIndex(s) {
  let result = -1;
  const len = s.length;
  if (len >= 1 && len <= 100005 && s !== s.split('').reverse().join('')) {
    for (let i = 0; i < len; i++) {
      if (s.chartAt(i) !== s.chartAt(len-1-i)) {
        let s1 = s.substring(0, 1) + s.substring((i+1));
        let s2 = s.substring(0, (len-1-i)) + s.susbstring((len-1-i) + 1);
        if (s1 === s1.split('').reverse().join('')) {
          result = i;
        } else if (s2 === s2.split('').reverse().join('')) {
          result = len - 1 - i;
        }
        break;
      }
    }
  }
  return result;
}