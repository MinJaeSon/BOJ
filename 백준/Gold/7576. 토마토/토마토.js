const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [M, N] = input[0].split(' ').map(Number);
let tomatoes = input.slice(1).map((row) => row.split(' ').map(Number));
let queue = [];
let head = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
    while(head < queue.length) {
        const [x, y] = queue[head++];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            if (tomatoes[nx][ny] !== 0) continue; 

            queue.push([nx, ny]);
            tomatoes[nx][ny] = tomatoes[x][y] + 1;
        }
    }
}

for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
        if (tomatoes[r][c] === 1) {
            queue.push([r, c]);
        }
    }
}

bfs();

if (tomatoes.flat().includes(0)) console.log(-1);
else console.log(Math.max(...tomatoes.flat()) - 1);