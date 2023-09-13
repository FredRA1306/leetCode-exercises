var countOdds = function (low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    console.log("Estou no i = " + i);
    if (i % 2 != 0) {
      count++;
      console.log(count);
    }
  }
  return count;
};

console.log(countOdds(3, 7));
