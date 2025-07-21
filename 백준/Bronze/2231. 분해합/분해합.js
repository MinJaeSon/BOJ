const fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin").toString().trim());
let answer = 0;

for (let i = 1; i <= N; i++) {
  let sum = i;
  for (let j = 0; j < String(i).length; j++) {
    sum += Number(String(i)[j]);
  }
  if (N === sum) {
    answer = i;
    break;
  }
}

console.log(answer);