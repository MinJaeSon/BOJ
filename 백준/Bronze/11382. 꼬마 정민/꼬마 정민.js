const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b, c] = input.map(num => Number(num));
console.log(a + b + c);