const fs = require("fs");
let [N, ...triangle] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
triangle = triangle.map((row) => row.split(" ").map(Number));

let dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));
dp[0][0] = triangle[0][0];

for (let i = 1; i < N; i++) {
    for (let k = 0; k <= i; k++) {
        if (k === 0) { // 삼각형 제일 왼쪽 끝
            dp[i][k] = triangle[i][k] + dp[i - 1][k];
        } else if (k === i) { // 제일 오른쪽 끝
            dp[i][k] = triangle[i][k] + dp[i - 1][k - 1];
        } else { // 중간
            dp[i][k] = triangle[i][k] + Math.max(dp[i - 1][k - 1], dp[i - 1][k]);
        }
    }
}

console.log(Math.max(...dp[N - 1]));