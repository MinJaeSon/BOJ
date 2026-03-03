const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let count = 0;

for (let i = 0; i < N; i++) {
    let left = 0;
    let right = N - 1;

    while (left < right) {
        if (left === i) {
            left++;
            continue;
        }
        if (right === i) {
            right--;
            continue;
        }

        const sum = arr[left] + arr[right];
        
        if (sum === arr[i]) {
            count++;
            break;
        } else if (sum > arr[i]) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(count);