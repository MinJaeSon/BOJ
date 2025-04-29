const fs = require("fs");
let [length, a, b] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = length.split(' ');
a = a.split(' ');
b = b.split(' ');

console.log([...a, ...b].sort((a, b) => a - b).join(' '));