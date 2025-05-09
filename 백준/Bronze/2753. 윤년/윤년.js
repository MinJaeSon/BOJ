const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let answer = 0;

if (input % 4 === 0) {
    if (input % 100 !== 0 || input % 400 === 0) {
        answer = 1;
    } 
}

console.log(answer);