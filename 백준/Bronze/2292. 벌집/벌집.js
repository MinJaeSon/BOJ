const fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin").toString().trim());
let count = 1;
let roomNum = 1;

while (roomNum < N) {
  roomNum += 6 * count;
  count++;
}

console.log(count);