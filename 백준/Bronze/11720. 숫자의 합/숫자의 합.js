const fs = require("fs");
let [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = 0;
for (let i = 0; i < n; i++) {
  answer += Number(input[i]);
}
console.log(answer);