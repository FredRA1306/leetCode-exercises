var isMonotonic = function (nums) {
  let definition = true;
  let comparation = true;

  for (j = 1; j < nums.length; j++) {
    if (nums[j] - nums[j - 1] > 0) {
      definition = true;
    } else if (nums[j] - nums[j - 1] < 0) {
      definition = false;
    }
  }

  console.log(`Minha definition: ${definition}`);

  for (i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) {
      comparation = true;
    } else if (nums[i] - nums[i - 1] === 0) {
      comparation = definition;
    } else comparation = false;
    console.log(`Minha comparation: ${comparation}`);

    if (definition != comparation) {
      return false;
    }
    console.log(`Estou comparando ${definition} com ${comparation}`);
  }
  return true;
};

console.log(isMonotonic([1, 1, 0]));
