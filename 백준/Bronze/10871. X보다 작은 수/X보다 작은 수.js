const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
console.log(arr.filter((val) => val < X).join(' '));