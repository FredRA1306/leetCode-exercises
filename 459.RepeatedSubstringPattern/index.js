var repeatedSubstringPattern = function (s) {
  for (i = 1; i <= s.length / 2; i++) {
    if (s.length % i === 0) {
      const substring = s.substring(0, i);
      let verification = "";

      for (let j = 0; j < s.length / i; j++) {
        verification += substring;
        // console.log(repeatedSubstring);

        if (verification === s) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(repeatedSubstringPattern("abcabc"));
