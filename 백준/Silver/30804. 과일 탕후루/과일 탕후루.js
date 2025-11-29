const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let fruits = input[1].split(' ').map(Number);

let left = 0;
let maxLen = 0;
let kind = 0;
let count = Array(10).fill(0);

for (let right = 0; right < N; right++) {
    const r = fruits[right];
    if (count[r] === 0) {
        kind++;
    }
    count[r]++;

    while (kind > 2) {
        const l = fruits[left];
        count[l]--;
        if (count[l] === 0) {
            kind--;
        }
        left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
}

console.log(maxLen);