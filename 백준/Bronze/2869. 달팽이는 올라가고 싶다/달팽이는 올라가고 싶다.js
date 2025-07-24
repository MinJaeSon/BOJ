const fs = require("fs");
const [A, B, V] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(Math.ceil((V - A) / (A - B)) + 1);