var isRobotBounded = function (instructions) {
  let direction = "N";
  let x = 0;
  let y = 0;

  function turnLeft() {
    if (direction === "N") {
      direction = "W";
    } else if (direction === "W") {
      direction = "S";
    } else if (direction === "S") {
      direction = "E";
    } else if (direction === "E") {
      direction = "N";
    }
  }

  function turnRight() {
    if (direction === "N") {
      direction = "E";
    } else if (direction === "E") {
      direction = "S";
    } else if (direction === "S") {
      direction = "W";
    } else if (direction === "W") {
      direction = "N";
    }
  }

  function move() {
    if (direction === "N") {
      y += 1;
    } else if (direction === "S") {
      y -= 1;
    } else if (direction === "W") {
      x += 1;
    } else if (direction === "E") {
      x -= 1;
    }
  }

  for (i = 0; i < instructions.length; i++) {
    if (instructions[i] === "L") {
      turnLeft();
    } else if (instructions[i] === "R") {
      turnRight();
    } else if (instructions[i] === "G") {
      move();
    }
    console.log(`Posição x: ${x}\nPosição y: ${y}`);
  }

  return (x === 0 && y === 0) || direction !== "N";
};

console.log(isRobotBounded("GLRLLGLL"));
