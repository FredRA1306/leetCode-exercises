var strStr = function (haystack, needle) {
  //Forma mais simples de resolver com JS
  //return haystack.indexOf(needle);

  //Forma mais manual/complexa
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str = "";
    for (let j = i; j < i + needle.length; j++) {
      str += haystack[j];
    }
    if (str == needle) {
      return i;
    }
  }
  return -1;
};
console.log(strStr("leetcode", "code"));
