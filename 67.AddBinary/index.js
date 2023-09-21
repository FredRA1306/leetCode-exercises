var addBinary = function (a, b) {
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2);
};

console.log(addBinary("11", "1")); // 100
console.log(addBinary("1010", "1011")); // 10101
console.log(addBinary("11010", "10100")); // 101110
console.log(addBinary("11011011", "11110110")); // 111010001
console.log(addBinary("11111", "11111")); // 111110
