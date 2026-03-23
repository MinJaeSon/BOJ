const fs = require("fs");
let [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
arr = [0, ...arr];

const dp = Array(N + 1).fill(0);
dp[1] = arr[1]; 
dp[2] = dp[1] + arr[2];

for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 3] + arr[i - 1], dp[i - 2]) + arr[i];
}

console.log(dp[N]);