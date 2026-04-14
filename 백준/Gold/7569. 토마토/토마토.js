const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [M, N, H] = input[0].split(' ').map(Number);
const boxes = [];
for (let h = 0; h < H; h++) {
    const box = input.slice(1 + N * h, N * h + N + 1).map((row) => row.split(' ').map(Number));
    boxes.push(box);
}

let ans = 0;

// 위, 아래, 앞, 뒤, 좌, 우
const dz = [-1, 1, 0, 0, 0, 0];
const dx = [0, 0, 1, -1, 0, 0];
const dy = [0, 0, 0, 0, -1, 1];

const queue = [];
let head = 0;

for (let z = 0; z < H; z++) {
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (boxes[z][x][y] === 1) {
                queue.push([z, x, y]);
            }
        }
    }
}

while (head < queue.length) {
    const [z, x, y] = queue[head++];

    for (let i = 0; i < 6; i++) {
        nz = z + dz[i]
        nx = x + dx[i]
        ny = y + dy[i]

        if (nz < 0 || nz >= H || nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

        if (boxes[nz][nx][ny] !== 0 || boxes[nz][nx][ny] === -1) continue;

        boxes[nz][nx][ny] = boxes[z][x][y] + 1;
        queue.push([nz, nx, ny]);
    }
}

flatBoxes = boxes.flat().flat()
if (flatBoxes.includes(0)) {
    ans = -1;
} else {
    ans = Math.max(...flatBoxes) - 1;
}

console.log(ans)