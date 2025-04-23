const fs = require('fs');
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(n % 2 === 0 ? 'CY' : 'SK');