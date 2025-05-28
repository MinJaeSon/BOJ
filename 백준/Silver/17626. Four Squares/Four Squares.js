const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());
let d = Array(n + 1).fill(0);

for (let i = 1; i * i <= n; i++) {
    d[i * i] = 1;
}

for (let i = 1; i <= n; i++) {
    if (d[i] === 1) continue;
    d[i] = Infinity;
    for (let j = 1; j * j <= i; j++) {
        d[i] = Math.min(d[i], d[i - j * j] + 1);
    }
}

console.log(d[n]);