const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const M = Number(input[1]);
const materials = input[2].split(' ').map(Number).sort((a, b) => a - b);
let count = 0;
let left = 0;
let right = N - 1;

while (left < right) {
    const sum = materials[left] + materials[right];
    if (sum < M) {
        left++;
    } else if (sum > M) {
        right--;
    } else {
        count++;
        left++;
        right--;
    }
}

console.log(count);