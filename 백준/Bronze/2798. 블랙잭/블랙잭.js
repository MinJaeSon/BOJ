const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

function solution() {
  let maxSum = 0;
  let stack = [];

  function dfs(startIdx, count) {
    if (count === 3) {
      const sum = stack.reduce((acc, cur) => acc + cur, 0);
      if (sum > maxSum && sum <= M) maxSum = sum;
      return;
    }

    for (let i = startIdx; i < N; i++) {
      stack.push(numbers[i]);
      dfs(i + 1, count + 1);
      stack.pop();
    }
  }

  dfs(0, 0);

  return maxSum;
}

console.log(solution());
