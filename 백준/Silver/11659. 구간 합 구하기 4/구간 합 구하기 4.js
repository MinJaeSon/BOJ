const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const ranges = input.slice(2);

let d = [0, ...numbers];
for (let i = 2; i <= N; i++) {
    d[i] += d[i - 1];
}

ranges.forEach((range) => {
    const [start, end] = range.split(' ').map(Number);
    console.log(d[end] - d[start - 1]);
})