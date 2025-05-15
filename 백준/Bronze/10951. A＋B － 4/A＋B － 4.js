const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input.forEach((exp) => {
  const [a, b] = exp.split(' ').map(Number);
  console.log(a + b);
})