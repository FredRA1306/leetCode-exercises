var lengthOfLastWord = function (s) {
  //console.log(s);
  const noSpaceString = s.trim();
  //console.log(noSpaceString);
  const firstIndex = noSpaceString.lastIndexOf(" ");
  const lastWord = noSpaceString.substring(firstIndex + 1, s.length);
  //console.log(lastWord);
  return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
