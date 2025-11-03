const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());
let dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
dp[1][0] = 0;
for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i < N + 1; i++) {
    for (let j = 0; j < 10; j++) {
        if (j === 0) {
            dp[i][j] = dp[i - 1][1];
        } else if (j === 9) {
            dp[i][j] = dp[i - 1][8];
        } else {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
        }
        dp[i][j] %= 1000000000;
    }
}

console.log(dp[N].reduce((acc, cur) => (acc + cur) % 1000000000 , 0));