const fs = require("fs");
let [N, ...costs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
costs = costs.map((row) => row.split(" ").map(Number));

// i까지의 집을 칠하는 비용과 i에서 RGB 중 뭐로 칠했는지를 저장
let d = Array.from({ length: N }, () => [0, 0, 0]);
d[0] = [...costs[0]];

for (let i = 1; i < N; i++) {
    d[i][0] = costs[i][0] + Math.min(d[i - 1][1], d[i - 1][2]);
    d[i][1] = costs[i][1] + Math.min(d[i - 1][0], d[i - 1][2]);
    d[i][2] = costs[i][2] + Math.min(d[i - 1][0], d[i - 1][1]);
}

console.log(Math.min(...d[N - 1]));