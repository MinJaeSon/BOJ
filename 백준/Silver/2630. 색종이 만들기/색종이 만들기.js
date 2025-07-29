const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const paper = input.slice(1).map((row) => row.split(" ").map(Number));
let whiteCount = 0;
let blueCount = 0;

function divide(x, y, size) {
  if (getConsistOfWhat(paper, x, y, size) === 0) {
    whiteCount++;
    return;
  }
  if (getConsistOfWhat(paper, x, y, size) === 1) {
    blueCount++;
    return;
  }
  
  // 현재 종이를 네등분 (좌상, 좌하, 우상, 우하)
  const half = size / 2;
  divide(x, y, half);
  divide(x + half, y, half);
  divide(x, y + half, half);
  divide(x + half, y + half, half);
}

function getConsistOfWhat(arr, x, y, size) {
  let zeroCount = 0;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] === 0) zeroCount++;
    }
  }

  if (zeroCount === 0) return 1; // 1로만 이루어져있음을 의미
  if (zeroCount === size * size) return 0; // 0으로만 이루어져 있음을 의미
  return -1; // 0과 1이 섞여있음을 의미
}

divide(0, 0, N);
console.log(whiteCount);
console.log(blueCount);
