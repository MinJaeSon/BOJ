const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input.slice(1, N + 1).map((line) => line.split(' ').map(Number));
const K = Number(input.slice(N + 1, N + 2));
const positions = input.slice(N + 2).map((line) => line.split(' ').map(Number));

let result = [];

for (let pos of positions) {
    const [x_start, y_start, x_end, y_end] = [--pos[0], --pos[1], --pos[2], --pos[3]];
    let sum = 0;

    for (let i = x_start; i <= x_end; i++) {
        for (let j = y_start; j <= y_end; j++) {
            sum += nums[i][j];
        }
    }
    result.push(sum);
}

console.log(result.join('\n'));
