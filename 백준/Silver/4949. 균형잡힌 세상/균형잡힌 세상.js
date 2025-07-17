const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(".\n");
input = input.slice(0, -1);
let result = [];

for (let sentence of input) {
  let stack = [];

  sentence.split("").forEach((char) => {
    switch (char) {
      case "(":
      case "[":
        stack.push(char);
        break;
      case ")":
        if (stack.length && stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          stack.push(char);
        }
        break;
      case "]":
        if (stack.length && stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          stack.push(char);
        }
        break;
      default:
        break;
    }
  });

  result.push(stack.length ? "no" : "yes");
}

console.log(result.join("\n"));
