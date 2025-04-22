const fs = require('fs');
let [n, ...commands] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let deque = [];
let result = [];
commands.forEach((line) => {
    const [cmd, num] = line.split(' ');
    switch (cmd) {
        case 'push_front':
            deque.unshift(num);
            break;
        case 'push_back':
            deque.push(num);
            break;
        case 'pop_front':
            result.push(deque.shift() ?? -1);
            break;
        case 'pop_back':
            result.push(deque.pop() ?? - 1);
            break;
        case 'size':
            result.push(deque.length);
            break;
        case 'empty':
            result.push(deque.length ? 0 : 1);
            break;
        case 'front':
            result.push(deque[0] ?? -1);
            break;
        case 'back':
            result.push(deque[deque.length - 1] ?? -1);
            break;
        default:
            break;
    }
})
console.log(result.join('\n'));