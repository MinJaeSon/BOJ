const fs = require("fs");
const { Z_ASCII } = require("zlib");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + N).map((row) => row.split(' ').map(Number));
const commands = input.slice(N + 1).map((row) => row.split(' ').map(Number));
const result = [];

// ✨문제 풀이 접근✨
// ✅ (x1,y1 ~ x2,y2 면적) = (0,0 ~ x2,y2 전체 면적) - (0,0 ~ x2,y1-1 왼쪽 면적) - (0,0 ~ x1-1,y2 위쪽 면적) + (0,0 ~ x1-1,y1-1 겹치는 면적)
// -> 누적합 유형의 문제임을 알 수 있음: 누적합을 이용해서 원하는 영역만 잘라내는 과정(=쿼리)을 해줌
// ✅ 이 각 면적(누적합)을 구하기 위해서 DP를 활용 (매번 NxN 시간복잡도 걸려서 구해야 함)
// -> dp 배열에는 0,0부터 i,j까지의 누적합을 저장하고
// -> 작은 조각들로 이 다음의 큰 조각들을 구할 수 있도록 점화식을 세운다: dp[i][j] = dp[i-1][j] + dp[i-1][j] - dp[i-1][j-1] + arr[i-1][j-1]

// 1️⃣ dp 배열 먼저 구하기 (누적합 활용해서 원하는 면적 구해야 하므로)
const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + arr[i-1][j-1];
    }
}

// 2️⃣ 누적합으로 쿼리 만들어서 필요한 면적 구하기
for (let [x1, y1, x2, y2] of commands) {
    const answer = dp[x2][y2] - dp[x2][y1-1] - dp[x1-1][y2] + dp[x1-1][y1-1];
    result.push(answer);
}

console.log(result.join('\n'));