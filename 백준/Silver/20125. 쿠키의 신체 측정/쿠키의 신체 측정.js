const fs = require("fs");
let [N, ...board] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
let heart = [0, 0];
let legStart = 0;
let lArm = 0;
let rArm = 0;
let waist = 0;
let lLeg = 0;
let rLeg = 0;

findHeartIndex();

function findHeartIndex() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === "*") {
        heart = [i + 1, j];
        return;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  if (i < heart[1] && board[heart[0]][i] === '*') {
    lArm++;
  } else if (i > heart[1] && board[heart[0]][i] === '*') {
    rArm++;
  }
}

for (let i = heart[0] + 1; i < N; i++) {
  if (board[i][heart[1]] === '_') {
    legStart = i;
    break;
  }

  waist++;
}

for (let i = legStart; i < N; i++) {
  if (board[i][heart[1] - 1] === '*') {
    lLeg++;
  }
  if (board[i][heart[1] + 1] === '*') {
    rLeg++;
  }
}

console.log(heart[0] + 1, heart[1] + 1);
console.log(lArm, rArm, waist, lLeg, rLeg);