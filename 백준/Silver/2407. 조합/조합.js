const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let d = Array(n + 1).fill(BigInt(0)); // n의 팩토리얼 값을 저장

d[1] = BigInt(1);
for (let i = 2; i <= n; i++) {
    d[i] = BigInt(i) * d[i - 1];
}

// nCm = n! / (m! * (n-m)!)
const answer = d[n] / (d[m] * d[n - m])

console.log(answer.toString());