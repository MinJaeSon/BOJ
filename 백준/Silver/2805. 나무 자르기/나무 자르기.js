const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution(trees, M) {
  let start = 0;
  let end = Math.max(...trees);
  let answer = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;

    trees.forEach((tree) => {
      const remainder = tree - mid;
      if (remainder >= 0) {
        sum += remainder;
      }
    });

    if (sum >= M) {
      answer = mid;
      start = mid + 1;
    } else if (sum < M) {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solution(trees, M));
