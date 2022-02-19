function miniMaxSum(arr) {
  let sum1 = 0;
  let sum2 = 0;
  arr.sort();
  let i = 0;
  let j = 1;
  while (i< 4) {
    sum1 += arr[i];
    i++
  }
  while(j < 5) {
    sum2 += arr[j];
    j++;
  }
  console.log(sum1, sum2)
}

miniMaxSum([5, 3, 1, 4, 2])