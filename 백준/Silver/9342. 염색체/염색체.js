const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);
const strings = input.slice(1);
let result = [];
let answer = "";

strings.forEach((string) => {
  answer = "Good";

  let cur = string[0];
  let new_str = cur;
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== cur) {
      new_str += string[i];
    }
    cur = string[i];
  }

  if (new_str[0] === "A") {
    if (new_str.slice(1) === "FC" || new_str.slice(1, -1) === "FC") {
      answer = "Infected!";
    }
  } else {
    if (new_str.slice(1) === "AFC" || new_str.slice(1, -1) === "AFC") {
      answer = "Infected!";
    }
  }

  if (!["A", "B", "C", "D", "E", "F"].includes(string[string.length - 1])) {
    answer = "Good";
  }

  result.push(answer);
});

console.log(result.join("\n"));
