const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let count = 0;
let stick = 0;
let stack = [];

input = input.replaceAll('()', '*');

for (let char of input) {
    switch (char) {
        case '*':
            count += stack.length;
            break;
        case '(':
            stick++;
            stack.push(char);
            break;
        case ')':
            stack.pop();
            break;
    }
}

console.log(stick + count);