// Top-Down Solution (Obviamente deu time-out no LeetCode)
var climbStairs = function (n) {
  let options = [];
  if (n <= 2) return n;

  options[n] = climbStairs(n - 1) + climbStairs(n - 2);

  return options[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(45));
