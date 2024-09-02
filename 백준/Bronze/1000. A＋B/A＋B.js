const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b] = input.map(num => Number(num))
console.log(a + b);