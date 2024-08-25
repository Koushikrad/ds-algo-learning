/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Check diagonals starting from the first row
  for (let i = 0; i < cols; i++) {
      if (!checkDiagonal(matrix, 0, i)) {
          return false;
      }
  }

  // Check diagonals starting from the first column
  for (let i = 1; i < rows; i++) {
      if (!checkDiagonal(matrix, i, 0)) {
          return false;
      }
  }

  function checkDiagonal(matrix, i, j) {
      const res = matrix[i][j];
      while (i < matrix.length && j < matrix[0].length) {
          if (matrix[i][j] !== res) {
              return false;
          }
          i++;
          j++;
      }
      return true;
  }

  return true;
};