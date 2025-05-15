const fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
for (let i = 0; i < n; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  console.log(a + b);
}