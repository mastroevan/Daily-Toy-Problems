/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

Example:
arr = [1, 1, 0, -1, -1];

There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000 , 2/5 = 0.400000 and 1/5 = 0.2000000. Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .
*/

function plusMinus(arr) {
  // Write your code here
  let pCount, nCount, zCount;
  pCount = nCount = zCount = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
      if (arr[i] = 0) {
        zCount++;
      } else if (arr[i] > 0) {
        pCount++;
      } else {
        nCount++;
      }
  }
  console.log((pCount/len).toFixed(6));
  console.log((nCount/len).toFixed(6));
  console.log((zCount/len).toFixed(6));
};