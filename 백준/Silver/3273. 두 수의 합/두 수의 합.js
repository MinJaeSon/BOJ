const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const x = Number(input[2]);
let answer = 0;

// 2 4 5 6 8 9 10 11 12

let left = 0;
let right = n - 1;

while(left < right) {
    if (arr[left] + arr[right] === x) {
        answer++;
        left++;
        right--;
    } else if (arr[left] + arr[right] < x) {
        left++;
    } else {
        right--;
    }
}

console.log(answer);