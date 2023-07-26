var maximumWealth = function (accounts) {
  let currentMaxValue = 0;

  for (i = 0; i < accounts.length; i++) {
    let currentValue = accounts[i].reduce(
      (accumulator, value) => accumulator + value,
      0
    );
    if (currentValue > currentMaxValue) {
      currentMaxValue = currentValue;
    }
  }
  return currentMaxValue;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
