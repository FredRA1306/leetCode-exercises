var findMode = function (root) {
  const counts = {};
  const maxCount = { value: 0 };
  const modes = [];

  // Função auxiliar para percorrer a árvore e contar as ocorrências dos elementos
  function traverse(node) {
    if (!node) {
      return;
    }

    counts[node.val] = (counts[node.val] || 0) + 1;

    if (counts[node.val] > maxCount.value) {
      maxCount.value = counts[node.val];
      modes.length = 0;
    }

    if (counts[node.val] === maxCount.value) {
      modes.push(node.val);
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return modes;
};

console.log(
  findMode({
    val: 1,
    left: null,
    right: { val: 2, left: { val: 2, left: null, right: null }, right: null },
  })
);
