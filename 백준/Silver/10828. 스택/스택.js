const fs = require('fs');
const [n, ...commands] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let stack = [];
let result = [];

commands.forEach((line) => {
    line = line.split(' ');
    if (line[0] === 'push') {
        stack.push(line[1]);
    } else if (line[0] === 'pop') {
        result.push(stack.pop() ?? -1);
    } else if (line[0] === 'size') {
        result.push(stack.length);
    } else if (line[0] === 'empty') {
        result.push(stack.length ? 0 : 1);
    } else if (line[0] === 'top') {
        result.push(stack[stack.length - 1] ?? -1);
    } 
})
console.log(result.join('\n'));