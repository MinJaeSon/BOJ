const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const stack = [];
const ans = [];

for (let i = 0; i < n; i += 1) {
  while (stack.length > 0 && arr[stack.at(-1)] < arr[i]) {
    stack.pop();
  }

  ans.push((stack.at(-1) ?? -1) + 1);

  stack.push(i);
}

console.log(ans.join(' '));