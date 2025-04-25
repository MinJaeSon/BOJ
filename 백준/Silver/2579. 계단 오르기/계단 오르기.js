const fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const d = Array(n).fill(0);

d[0] = input[0];
d[1] = input[0] + input[1];
d[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < n; i++) {
    d[i] = Math.max(d[i - 3] + input[i - 1], d[i - 2]) + input[i];
}

console.log(d[n - 1]);