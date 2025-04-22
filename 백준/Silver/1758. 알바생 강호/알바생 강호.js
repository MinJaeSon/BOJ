const fs = require('fs');
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let answer = 0;
arr = arr.sort((a, b) => b - a);
arr.forEach((el, i) => {
    const tip = el - i;
    answer += tip < 0 ? 0 : tip;
})
console.log(answer);