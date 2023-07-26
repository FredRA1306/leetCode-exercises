var arraySign = function (nums) {
  let product = 1;
  for (let num of nums) {
    product *= num;
    console.log(product);
  }
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else return 0;
};

console.log(arraySign([-1, 1, -1, 1, -1]));
