const fs = require("fs");
let S = Number(fs.readFileSync("/dev/stdin").toString().trim());
let num = 1;
let sum = 0;
while (S >= sum) {
  sum += num++;
}
console.log(num - 2);
