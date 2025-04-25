const fs = require("fs");
let [n, expression, ...operations] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let stack = [];
const alphaMap = {};

// 알파벳에 값 맵핑
for (let i = 0; i < Number(n); i++) {
    const char = String.fromCharCode(65 + i); // A, B, C, ...
    alphaMap[char] = Number(operations[i]);
}

for (let i = 0; i < expression.length; i++) {
  if (/[A-Z]/.test(expression[i])) {
    stack.push(alphaMap[expression[i]]);
  } else {
    const op2 = stack.pop();
    const op1 = stack.pop();
    const result = calculate(op1, op2, expression[i]);
    stack.push(result);
  }
}

const answer = stack.pop();
console.log((Math.floor(answer * 100) / 100).toFixed(2));

function calculate(op1, op2, char) {
  switch (char) {
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
  }
}
