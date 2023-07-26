var romanToInt = function (s) {
  romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    const nextSymbol = s[i + 1];

    if (romanValues[currentSymbol] < romanValues[nextSymbol]) {
      result -= romanValues[currentSymbol];
    } else {
      result += romanValues[currentSymbol];
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
