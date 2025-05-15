const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const set = new Set(input.slice(1, N + 1));
const words = input.slice(N + 1);
let answer = 0;

words.forEach((word) => {
  if (set.has(word)) answer++;
})

console.log(answer);