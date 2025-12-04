const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));

const dx = [1, -1, 0, 0]; // 상, 하, 좌, 우
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  let queue = [];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let dist = Array.from({ length: n }, () => Array(m).fill(-1));

  queue.push([x, y]);
  visited[x][y] = true;
  dist[x][y] = 0;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (visited[nx][ny]) continue;

      if (map[nx][ny] === 0) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
    }
  }

  return dist;
}

let startX, startY;
// 목표지점(2)의 좌표 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      startX = i;
      startY = j;
    }
  }
}

let distances = bfs(startX, startY); // ⭐️목표지점을 시작점으로 해서 bfs를 돌며 각 땅까지의 최단 거리를 채운다!

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
        distances[i][j] = 0; // 원래 못 가는 땅은 0으로 출력
    }
  }
}

console.log(distances.map((row) => row.join(" ")).join("\n"));
