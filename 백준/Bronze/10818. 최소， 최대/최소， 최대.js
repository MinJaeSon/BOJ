const fs = require("fs");
let [_, input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input = input.split(' ').map(Number);
console.log(Math.min(...input), Math.max(...input));