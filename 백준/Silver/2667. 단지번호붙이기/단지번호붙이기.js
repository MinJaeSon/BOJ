const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const graph = input.slice(1).map((row) => row.split('').map(Number));
const result = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    let count = 1;
    graph[x][y] = 0; // 방문 처리
    const queue = [[x, y]];

    while (queue.length) {
        const [x, y]= queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;

            if (graph[nx][ny] === 0) continue;

            count++;
            graph[nx][ny] = 0;
            queue.push([nx, ny]);
        }
    }

    return count;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] !== 0) {
            const count = bfs(i, j);
            result.push(count);
        }
    }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));