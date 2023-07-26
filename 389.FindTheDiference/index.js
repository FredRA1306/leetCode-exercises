// const s = "abaisdbfhiasohdfiaosdhfuidsoauuiacd";
// const t = "aabaisdabfhisohdfiaosdhfuidsoauuiacd";
// const addedLetter = findTheDifference(s, t);

var findTheDifference = function (s, t) {
  const letterCount = {}; // Crio um objeto vazio

  for (let i = 0; i < s.length; i++) {
    // Percorro a String 's'
    const letter = s[i];
    if (letterCount[letter]) {
      // Se a letra já ta no objeto eu somo 1 na contagem
      letterCount[letter]++;
    } else {
      // Se a letra não estiver na contagem, coloca ela lá com contador 1
      letterCount[letter] = 1;
    }
  }

  // Usei esse console.log pra testar se tava rolando a contagem direitinho
  // console.log("Contagem:", JSON.stringify(letterCount, null, 2));

  for (let i = 0; i < t.length; i++) {
    // Percorro a String 't'
    const letter = t[i];
    if (!letterCount[letter] || letterCount[letter] === 0) {
      // Se a letra não estiver no objeto é porque ela é a que eu procuro
      // Se ela está mas com contador 0 é porque ela é a que eu procuro (porque já passei pelo próximo passo do for e removi todos os pontos que somei no loop anterior)
      return letter;
    } else {
      letterCount[letter]--;
      // Se a letra está no objeto e o contador não for 0, eu tiro 1 contador
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
