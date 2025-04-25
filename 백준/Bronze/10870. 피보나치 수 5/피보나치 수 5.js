const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());
const d = Array(n + 1).fill(0);

d[0] = 0;
d[1] = 1;

for (let i = 2; i < n + 1; i++) {
    d[i] = d[i - 1] + d[i - 2];
}

console.log(d[n]);