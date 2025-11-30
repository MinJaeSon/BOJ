const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [K, N] = input[0].split(' ').map(Number);
const lines = input.slice(1).map(Number);
let maxLen = 0;

let start = 1;
let end = Math.max(...lines);
let mid = Math.floor((start + end) / 2);

while(start <= end) {
    mid = Math.floor((start + end) / 2);

    const sum = lines.reduce((acc, cur) => acc + parseInt(cur / mid), 0);
    if (sum >= N) {
        maxLen = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(maxLen);