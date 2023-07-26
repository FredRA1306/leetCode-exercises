var judgeCircle = function (moves) {
  let vertical = 0;
  let horizontal = 0;

  for (i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      vertical++;
    } else if (moves[i] === "D") {
      vertical--;
    } else if (moves[i] === "R") {
      horizontal++;
    } else if (moves[i] === "L") {
      horizontal--;
    }
  }
  if (vertical === 0 && horizontal === 0) {
    return true;
  }
  return false;
};

console.log(judgeCircle("UD"));
