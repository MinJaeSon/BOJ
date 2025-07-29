const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());
let d = Array(n + 1).fill(0);
d[1] = 1;

for (let i = 2; i <= n; i++) {
    const add = i % 2 ? -1 : 1;
    d[i] = (d[i - 1] * 2 + add) % 10007;
}

console.log(d[n]);