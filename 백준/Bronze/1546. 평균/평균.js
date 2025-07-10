const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function solution() {
  let answer = 0;
  const max = Math.max(...numbers);

  numbers.forEach((num) => answer += (num / max) * 100);
  answer /= N;

  return answer;
}

console.log(solution());
