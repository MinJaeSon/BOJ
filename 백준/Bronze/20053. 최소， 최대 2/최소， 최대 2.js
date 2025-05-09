const fs = require("fs");
const [T, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let result = [];

for (let i = 0; i < T * 2; i+=2) {
    const arr = input[i + 1].split(' ').map(Number);
    result.push([Math.min(...arr), Math.max(...arr)]);
}

for (let i = 0; i < T; i++) {
    console.log(result[i].join(' '));
}