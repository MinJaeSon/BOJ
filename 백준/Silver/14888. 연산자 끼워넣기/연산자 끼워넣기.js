const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map((n) => BigInt(n));
const op_nums = input[2].split(" ").map(Number); // [+, -, x, ÷]
let max = null;
let min = null;
const temp = [];

function dfs(depth, operators) {
  if (depth === N - 1) {
    calculate(operators);
    return;
  }

  for (let i = 0; i < op_nums.length; i++) {
    if (op_nums[i] === 0) {
      continue;
    }

    op_nums[i] -= 1;
    temp.push(i); // + 이면 0, - 이면 1, ...
    dfs(depth + 1, temp);
    temp.pop();
    op_nums[i] += 1;
  }
}

function calculate(operators) {
  let total = BigInt(arr[0]);

  for (let i = 1; i <= N - 1; i++) {
    const op = operators[i - 1];
    switch (op) {
      case 0:
        total += arr[i];
        break;
      case 1:
        total -= arr[i];
        break;
      case 2:
        total *= arr[i];
        break;
      case 3:
        total = total / arr[i];
        break;
    }
  }

  if (max === null || total > max) max = total;
  if (min === null || total < min) min = total;
}

dfs(0);

console.log(Number(max));
console.log(Number(min));
