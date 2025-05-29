const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let answer = 0;

for (const val of arr) {
    answer += val ** 2;
}

console.log(answer % 10);