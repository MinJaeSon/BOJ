const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);

const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
let minCount = 8 * 8;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const chessboard = [];
    for (let k = 0; k < 8; k++) {
      chessboard.push(board[i + k].slice(j, j + 8));
    }
    minCount = Math.min(minCount, countRepaint(chessboard));
  }
}

console.log(minCount);

function countRepaint(chessboard) {
  let whiteCount = 0;
  let blackCount = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (whiteFirst[i][j] !== chessboard[i][j]) whiteCount++;
      if (blackFirst[i][j] !== chessboard[i][j]) blackCount++;
    }
  }

  return Math.min(whiteCount, blackCount);
}
