function flippingMatrix(matrix) {
  // Write your code here
  let len = matrix.length - 1;
  let result = 0;
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      result += Math.max(
        matrix[i][j],
        matrix[i][len - j],
        matrix[len - i][j],
        matrix[len - i][len - j]
      );
    }
  }
  return result;
}
