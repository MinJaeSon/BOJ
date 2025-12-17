const fs = require("fs");
let [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = [];
let numbers = Array.from({ length: N }, (_, i) => i + 1); // [1, 2, 3]
let count = 0;
let sequence = [];

function dfs(count, cur) {
    if (count === M) {
        result.push(sequence.join(" "));
        return;
    }

    for (let i = cur; i < N; i++) {
        sequence.push(numbers[i]);
        dfs(count + 1, i);
        sequence.pop();
    }
}

dfs(count, 0);

console.log(result.join("\n"));