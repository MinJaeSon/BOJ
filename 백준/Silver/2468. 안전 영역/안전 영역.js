const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const board = input.slice(1).map(line => line.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y, visited, water) {
  visited[x][y] = true;

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (
      nx >= 0 && ny >= 0 && nx < N && ny < N &&
      !visited[nx][ny] &&
      board[nx][ny] > water
    ) {
      dfs(nx, ny, visited, water);
    }
  }
}

let answer = 0;

const maxHeight = Math.max(...board.flat());

for (let water = 0; water <= maxHeight; water++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {

      if (!visited[i][j] && board[i][j] > water) {
        dfs(i, j, visited, water);
        count++;
      }

    }
  }

  answer = Math.max(answer, count);
}

console.log(answer);