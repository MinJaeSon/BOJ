const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = [];
let sequence = [];
let visited = Array(N).fill(false);

function dfs(depth) {
  if (depth === M) {
    result.push(sequence.join(' '));
    return;
  }

  let prev = -1; // depth가 달라질 때 초기화(depth 범위 내에서 기록돼야 하기 때문)
  for (let i = 0; i < N; i++) {
    if (!visited[i] && prev !== numbers[i]) {
      visited[i] = true;
      sequence.push(numbers[i]);
      dfs(depth + 1);
      sequence.pop();
      visited[i] = false;
      prev = numbers[i]; // 이전에 수열에 추가한 숫자를 기록
    }
  }
}

dfs(0);

console.log(result.join("\n"));
