/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]


Constraints:

1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  const pascalsTriangles = [];
  if (numRows === 0) {
    return pascalsTriangles;
  }
  pascalsTriangles.push([1]);
  let last = [];
  while (pascalsTriangles.length < numRows) {
    let newEntry = [];
    newEntry[0] = 1;
    for (let i = 0; i  < last.length - 1;  i++){
      newEntry[i+1] = last[i] + lasat[i+1];
    }
    newEntry.push(1);
    pascalsTriangles(newEntry);
    last = newEntry;
  }
  return pascalsTriangles;
};