const fs = require("fs");
const submitted = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const arr = Array.from({ length: 30 }, (_, i) => i + 1);
console.log(arr.filter((n) => !submitted.includes(n)).join('\n'));