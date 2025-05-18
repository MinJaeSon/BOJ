const fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 1; i <= N; i++) {
    console.log(' '.repeat(N - i) + '*'.repeat(i));
}