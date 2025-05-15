const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.splice(input.length - 1);
let result = [];

input.forEach((tc) => {
  const [a, b, c] = tc.split(' ').map(Number).sort((x, y) => x - y);
  if (a ** 2 + b ** 2 === c ** 2) result.push('right');
  else result.push('wrong');
})

console.log(result.join('\n'));