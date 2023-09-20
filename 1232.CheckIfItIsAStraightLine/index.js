var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x1, y1] = coordinates[i - 2];
    const [x2, y2] = coordinates[i - 1];
    const [x3, y3] = coordinates[i];

    if ((x2 - x1) * (y3 - y2) !== (x3 - x2) * (y2 - y1)) {
      return false;
    }
  }

  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
); // true
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
); // false
