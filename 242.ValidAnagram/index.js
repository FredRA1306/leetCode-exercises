var isAnagram = function (s, t) {
  const letterCount = {};

  for (i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    if (letterCount[letter]) {
      letterCount[letter]--;
    } else if (!letterCount[letter] || letterCount[letter] === 0) {
      return false;
    }
  }

  if (s.length != t.length) {
    return false;
  }

  return true;
};

console.log(isAnagram("ab", "a"));
