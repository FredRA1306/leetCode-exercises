var tictactoe = function (moves) {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // Função para checar se existe um vencedor
  function checkWinner(player) {
    // Analisa as linhas
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }

    // Analisa as colunas
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === player &&
        board[1][j] === player &&
        board[2][j] === player
      ) {
        return true;
      }
    }

    // Analisa as diagonais
    if (
      (board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player) ||
      (board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player)
    ) {
      return true;
    }

    return false;
  }

  // Simula o jogo
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    const player = i % 2 === 0 ? "A" : "B";

    board[row][col] = player;
    console.table(board);

    // Analisa se existe alguma condição de vitória
    if (checkWinner(player)) {
      return player;
    }
  }

  // Analisa se o jogo deu impate ou se está pendente
  return moves.length === 9 ? "Draw" : "Pending";
};

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);
