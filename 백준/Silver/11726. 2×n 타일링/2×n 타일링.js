const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());
let d = Array(n + 1).fill(0);
d[1] = 1
d[2] = 2;

for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 10007;
}

console.log(d[n]);