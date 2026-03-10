const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
let numbers = [...new Set(input[1].split(' ').map(Number).sort((a, b) => a - b))];
let sequence = [];
let result = [];

function dfs(depth) {
    if (depth === M) {
        result.push([...sequence]);
        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        sequence.push(numbers[i]);
        dfs(depth + 1);
        sequence.pop();
    }
}

dfs(0);

console.log(result.map((sequence) => sequence.join(' ')).join('\n'));