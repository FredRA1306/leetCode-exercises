// const word1 = "abc";
// const word2 = "pqr";
// const mergedString = mergeAlternately(word1, word2);

var mergeAlternately = function (word1, word2) {
  let merged = ""; // Crio uma String vazia
  let mergedStrings = word1.concat(word2); // Concateno as duas Strings pra saber o tamanho que ela toda deve ter

  for (let i = 0; i < mergedStrings.length; i++) {
    // Percorro a String concatenada
    if (i < word1.length) {
      merged += word1.charAt(i); // Adiciono na resposta final a letra do índice analisado
    }

    if (i < word2.length) {
      merged += word2.charAt(i); // Adiciono na resposta final a letra do índice analisado
    }
  }
  // Como eu tenho dois 'if' um depois do outro sem um 'else', eu sempre vou executando um por vez até o loop recomeçar
  // Se o índice atual não corresponte ao tamanho da minha String o meu 'if' não funciona, até acabar a possibilidade dos meus dois 'if'
  return merged;
};
console.log(mergeAlternately("abc", "pqr"));
