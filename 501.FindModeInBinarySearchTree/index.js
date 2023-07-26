var findMode = function (root) {
  const letterCount = {};

  for (i = 0; i < root.length; i++) {
    const letter = root[i];
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  const values = Object.values(letterCount);
  const maxValue = Math.max(...values);
  const keys = Object.keys(letterCount);

  const keysWithMaxValue = keys
    .filter((key) => letterCount[key] === maxValue)
    .map((key) => Number(key));

  return keysWithMaxValue;
};

console.log(findMode([1, null, 2, 2, 1, 1, 1]));
