//Button-up Solution
var climbStairs = function (n) {
  if (n == 1) return 1;

  const options = new Array(n + 1).fill(0);
  options[1] = 1;
  options[2] = 2;

  for (let i = 3; i <= n; i++) {
    options[i] = options[i - 1] + options[i - 2];
  }

  return options[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(45));
