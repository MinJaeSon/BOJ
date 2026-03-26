const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const op_nums = input[2].split(' ').map(Number); // [+, -, x, ÷]
let max = -Infinity;
let min = Infinity;
const temp = [];

function dfs(depth) {
  if (depth === N - 1) {
    calculate(temp);
    return;
  }

  for (let i = 0; i < op_nums.length; i++) {
    if (op_nums[i] === 0) {
      continue;
    }

    op_nums[i] -= 1;
    temp.push(i); // + 이면 0, - 이면 1, ...
    dfs(depth + 1);
    temp.pop();
    op_nums[i] += 1;
  }
}

function calculate(operators) {
  let total = arr[0];

  for (let i = 1; i <= N - 1; i++) {
    const op = operators[i - 1];
    switch(op) {
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
        total = Math.trunc(total / arr[i]) || 0; // js에서 0과 -0은 다른 값이므로, -0을 0으로 변환 필요
        break;
    }
  }

  max = Math.max(max, total);
  min = Math.min(min, total);
}

dfs(0);

console.log(max);
console.log(min);