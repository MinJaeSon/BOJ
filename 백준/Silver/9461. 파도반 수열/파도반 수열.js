const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const T = input[0];
const numbers = input.slice(1);
let result = [];

let d = Array(Math.max(...numbers) + 1).fill(0);
d[1] = d[2] = d[3] = 1;
d[4] = d[5] = 2;

for (let i = 6; i <= Math.max(...numbers); i++) {
  d[i] = d[i - 1] + d[i - 5];
}

for( let N of numbers) {
  result.push(d[N]);
}

console.log(result.join('\n'));