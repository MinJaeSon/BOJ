const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input.splice(input.length - 1);
input.forEach((exp) => {
  const [a, b] = exp.split(' ').map(Number);
  console.log(a + b);
})