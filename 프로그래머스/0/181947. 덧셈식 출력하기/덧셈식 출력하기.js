const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    [num1, num2] = line.split(' ').map(Number);
}).on('close', function () {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
});