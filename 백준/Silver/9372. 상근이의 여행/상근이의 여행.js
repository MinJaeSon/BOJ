const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const T = Number(input[0]);
const arr = input.slice(1);
let index = 0;
let result = [];

for (let i = 0; i < T; i++) {
    const [N, M] = arr[index].split(' ').map(Number);
    result.push(N - 1);

    index += (M + 1);
}

console.log(result.join('\n'));