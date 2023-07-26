var canMakeArithmeticProgression = function (arr) {
  if (arr.length < 2) {
    return false;
  }

  arr.sort((a, b) => a - b);
  console.log(`Reordenando os numeros: ${arr}`);

  difference = arr[1] - arr[0];
  console.log(`A diferença deve ser ${difference}`);

  for (i = 2; i < arr.length; i++) {
    console.log(`Vou comparar ${arr[i]} e ${arr[i - 1]}`);
    console.log(`A diferença é ${arr[i] - arr[i - 1]}`);
    if (arr[i] - arr[i - 1] != difference) {
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression([2, 4, 6, 8, 10]));
