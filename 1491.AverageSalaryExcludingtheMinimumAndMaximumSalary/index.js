var average = function (salary) {
  salary.sort((a, b) => a - b);

  salary.shift();
  salary.pop();

  const sum = salary.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / salary.length;

  return avg;
};

console.log(average([4000, 3000, 1000, 2000])); // 2500
console.log(average([1000, 2000, 3000])); // 2000
console.log(average([6000, 5000, 4000, 3000, 2000, 1000])); // 7500
