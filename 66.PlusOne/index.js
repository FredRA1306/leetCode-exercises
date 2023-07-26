const plusOne = (digits) => {
  let regulator = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    //console.log("Entrei no primeiro if");
    //console.log(digits);
    //console.log(`Vou anaisar o ${digits[i]}`);
    digits[i] += regulator;
    //console.log(`Mudei ele para: ${digits[i]}`);
    //console.log(digits);

    if (digits[i] < 10) {
      //console.log(`Entrei no primeiro if`);
      regulator = 0;
      //console.log(`Meu regulador agora é: ${regulator}`);
      break;
    } else {
      //console.log(`Entrei no else`);
      digits[i] = 0;
      //console.log(`Mudei o i analisado para: ${digits[i]}`);
      //console.log(digits);
    }
  }

  if (regulator === 1) {
    //console.log(`Entrei no segundo if`);
    digits.unshift(1);
    //console.log(`Adicionei um 1}`);
    //console.log(digits);
  }

  return digits;
};

console.log(plusOne([1, 9, 9, 9]));
