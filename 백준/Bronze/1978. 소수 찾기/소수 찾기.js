const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input[1].split(" ").map(Number);

function solution() {
  return numbers.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }).length;
}

console.log(solution());
