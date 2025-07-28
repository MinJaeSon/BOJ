const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let visited = Array(N + 1).fill(false);
let result = [];
let combination = [];

function dfs(idx, depth) {
  if (depth >= M) {
    result.push(combination.join(" "));
    return;
  }

  for (let i = idx; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      combination.push(i);
      dfs(i + 1, depth + 1);
      combination.pop();
      visited[i] = false;
    }
  }
}

dfs(1, 0);
console.log(result.join("\n"));
