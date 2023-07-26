var spiralOrder = function (matrix) {
  let result = [];

  if (!matrix || matrix.length === 0) {
    return result;
  }

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let collumnStart = 0;
  let collumnEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && collumnStart <= collumnEnd) {
    for (let i = collumnStart; i <= collumnEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][collumnEnd]);
    }
    collumnEnd--;

    if (rowStart <= rowEnd) {
      for (let i = collumnEnd; i >= collumnStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    if (collumnStart <= collumnEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][collumnStart]);
      }
      collumnStart++;
    }
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
