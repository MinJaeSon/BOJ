const fs = require("fs");
const [n1, n2] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function getGCD(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

console.log(getGCD(Math.max(n1, n2), Math.min(n1, n2)));
console.log(getLCM(Math.max(n1, n2), Math.min(n1, n2)));
