const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
let queue = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

while (queue.length) {
  for (let i = 0; i < K; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.pop());
}

console.log(`<${result.join(', ')}>`);