var generateMatrix = function (n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(Array(n).fill(undefined));
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let collumnsStart = 0;
  let collumnEnd = n - 1;
  let numberCount = 1;

  while (rowStart <= rowEnd && collumnsStart <= collumnEnd) {
    for (let i = collumnsStart; i <= collumnEnd; i++) {
      matrix[rowStart][i] = numberCount;
      numberCount++;
    }
    rowStart++;
    //console.log(`RS: ${rowStart}\nRE: ${rowEnd}\nCS: ${collumnsStart}\nCE: ${collumnEnd}`);
    //console.table(matrix);

    for (let i = rowStart; i <= collumnEnd; i++) {
      matrix[i][collumnEnd] = numberCount;
      numberCount++;
    }
    collumnEnd--;
    //console.log(`RS: ${rowStart}\nRE: ${rowEnd}\nCS: ${collumnsStart}\nCE: ${collumnEnd}`);
    //console.table(matrix);

    if (rowStart <= rowEnd) {
      for (let i = collumnEnd; i >= collumnsStart; i--) {
        matrix[rowEnd][i] = numberCount;
        numberCount++;
      }
      rowEnd--;
    }
    //console.log(`RS: ${rowStart}\nRE: ${rowEnd}\nCS: ${collumnsStart}\nCE: ${collumnEnd}`);
    //console.table(matrix);

    if (collumnsStart <= collumnEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][collumnsStart] = numberCount;
        numberCount++;
      }
      collumnsStart++;
    }
    //console.log(`RS: ${rowStart}\nRE: ${rowEnd}\nCS: ${collumnsStart}\nCE: ${collumnEnd}`);
    //console.table(matrix);
  }

  return matrix;
};

console.log(generateMatrix(20));
