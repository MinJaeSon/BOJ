const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);
const result = [];
const stack = [];

function dfs(depth) {
    if (depth === M) {
        result.push(stack.join(' '));
        return;
    }

    for (let i = 0; i < N; i++) {
        stack.push(numbers[i]);
        dfs(depth + 1);
        stack.pop();
    }
}

dfs(0);

console.log(result.join('\n'));