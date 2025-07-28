const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);

let visited = Array(N).fill(false);
let result = [];
let combination = [];

function dfs(depth) {
  if (depth >= M) {
    result.push(combination.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      combination.push(numbers[i]);
      dfs(depth + 1);
      combination.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(result.join("\n"));
