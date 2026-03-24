const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

const dp = [...numbers];

for (let i = 0; i < N; i++) {
    for (let j = i - 1; j >= 0; j--) {
        if (numbers[j] < numbers[i]) {
            dp[i] = Math.max(dp[i], dp[j] + numbers[i]);
        }
    }
}

console.log(Math.max(...dp));