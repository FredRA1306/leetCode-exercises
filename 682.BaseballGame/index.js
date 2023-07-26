var calPoints = function (operations) {
  let record = [];
  let currentScore = 0;
  for (i = 0; i < operations.length; i++) {
    if (operations[i] === "D") {
      currentScore = record[record.length - 1] * 2;
      record.push(currentScore);
    } else if (operations[i] === "C") {
      record.pop();
    } else if (operations[i] === "+") {
      if (record.length >= 2) {
        currentScore = record[record.length - 1] + record[record.length - 2];
        record.push(currentScore);
      } else {
        currentScore = record[record.length - 1];
        record.push(currentScore);
      }
    } else {
      currentScore = parseFloat(operations[i]);
      record.push(currentScore);
    }
  }

  if (record.length > 0) {
    return (sum = record.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }));
  }
  return 0;
};

console.log(calPoints(["1", "C"]));

//if (record.length > 0) {
//sum = record.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
//} else return 0;
