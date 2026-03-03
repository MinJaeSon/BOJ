const fs = require("fs");
let numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let answer = 0;

for (let n of numbers) {
    if (Math.abs(answer - 100) < Math.abs(answer + n - 100)) {
        break;
    }

    answer += n;
}

console.log(answer);
