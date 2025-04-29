const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, x] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < n; i++) {
  if (i < x) sum += visitors[i];
}

let maxSum = sum;
let count = 1;
let start = 0;
let end = x - 1;

while (true) {
  start++;
  end++;

  if (end >= n) break;

  sum = sum + visitors[end] - visitors[start - 1];
  if (maxSum === sum) {
    count += 1;
  } else if (maxSum < sum) {
    maxSum = sum;
    count = 1;
  }
}

if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(count);
}
