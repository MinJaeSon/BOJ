const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const commands = input.slice(1);
let queue = [];
let result = [];
let head = 0;
commands.forEach((line) => {
    line = line.split(' ');
    if (line[0] === 'push') {
        queue.push(line[1]);
    } else if (line[0] === 'front') {
        result.push(head < queue.length ? queue[head] : -1);
    } else if (line[0] === 'back') {
        result.push(head < queue.length ? queue[queue.length - 1] : -1);
    } else if (line[0] === 'size') {
        result.push(queue.length - head);
    } else if (line[0] === 'empty') {
        result.push(head >= queue.length ? 1 : 0);
    } else if (line[0] === 'pop') {
        result.push(head < queue.length ? queue[head++] : -1);
    }
})
console.log(result.join('\n'));