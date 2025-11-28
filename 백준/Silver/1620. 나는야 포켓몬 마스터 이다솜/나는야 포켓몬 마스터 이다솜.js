const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const poketmons = input.slice(1, N + 1);
const questions = input.slice(N + 1);
let p_book = new Map();
let result = [];

poketmons.forEach((poketmon, idx) => {
  p_book.set(idx + 1, poketmon);
  p_book.set(poketmon, idx + 1);
});

questions.forEach((question) => {
  if (isNaN(question)) {
    // 문자일때
    result.push(p_book.get(question));
  } else {
    // 숫자일떄
    result.push(p_book.get(Number(question)));
  }
});

console.log(result.join("\n"));
