const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");
let sum = 0;
let w = 1;

for (let i = 0; i < 13; i++) {
  if (input[i] === "*") {
    w = i % 2 === 0 ? 1 : 3;
  } else {
    sum += Number(input[i]) * (i % 2 === 0 ? 1 : 3);
  }
}

for (let i = 0; i < 10; i++) {
  if ((sum + i * w) % 10 === 0) {
    console.log(i);
    break;
  }
}
