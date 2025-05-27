const fs = require("fs");
let [n, arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;
let answer = 0;
arr = arr.split(" ").map(Number).sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    answer += sum;
}
console.log(answer);