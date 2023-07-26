var moveZeroes = function (nums) {
  let numsSize = nums.length;
  for (let i = 0; i < numsSize; i++) {
    if (nums[i] === 0) {
      //console.log("Comecou o if", nums, "i = ", i, "Size:", numsSize);
      nums.splice(i, 1);
      //console.log("Tirou um zero", nums);
      nums.push(0);
      //console.log("Colocou o zero no final", nums);

      i--;
      //console.log("Mudou o i para", i);
      numsSize--;
      //console.log("Mudou o Size para", numsSize);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
