const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const stones = [[0, 0], ...input.slice(1).map((stone) => stone.split(' ').map(Number))];
const K = Number(input[N]);

let d = Array.from({ length: N + 1 }, () => Array(2).fill(Infinity)); // 2차원 DP 테이블 -> 이유 : 매우 큰 점프는 최대 한 번밖에 못 하기 떄문에 사용 위치를 함께 기록하기 위함
// 💡 2차원 배열 DP 문제의 핵심 : 저장해야 할 상태가 두 가지일 때!

// dp[i][0] = i번째 돌까지 왔을 때, 매우 큰 점프를 아직 사용하지 않은 최소 에너지
// dp[i][1] = i번째 돌까지 왔을 때, 매우 큰 점프를 이미 한 번 사용한 최소 에너지
d[1][0] = 0;
if (N >= 2) d[2][0] = stones[1][0];

if (N <= 2) {
    console.log(d[N][0]);
    process.exit(0);
}

for (let i = 3; i <= N; i++) {
    // 매우 큰 점프를 아예 안 쓰는 경우
    d[i][0] = Math.min(d[i - 2][0] + stones[i - 2][1], d[i - 1][0] + stones[i - 1][0]);

    // 이미 이전에 한 번 썼을 때
    d[i][1] = Math.min(d[i - 2][1] + stones[i - 2][1], d[i - 1][1] + stones[i - 1][0]);

    // 아직 안 쓴 상황에서 이번에 한 번 쓸 떄 (i번째 돌에 매우 큰 점프를 써서 도착했을 때의 최소 에너지 계산)
    if (i >= 4) d[i][1] = Math.min(d[i][1], d[i - 3][0] + K);
}

console.log(Math.min(d[N][0], d[N][1]));