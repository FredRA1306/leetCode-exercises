var diagonalSum = function (mat) {
  const matSize = mat.length;
  let sum = 0;

  for (i = 0; i < matSize; i++) {
    sum += mat[i][i] + mat[i][matSize - 1 - i];
  }

  if (matSize % 2 === 1) {
    const matCenter = Math.floor(matSize / 2);
    sum -= mat[matCenter][matCenter];
  }

  return sum;
};

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
