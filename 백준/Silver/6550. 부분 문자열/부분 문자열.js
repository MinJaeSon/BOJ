const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let result = [];

input.forEach((str) => {
    let [s, t] = str.split(' ');
    let stack = [];
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = start; j < t.length; j++) {
            if (s[i] === t[j]) {
                stack.push(s[i]);
                start = j + 1;
                break;
            }
        }
    }

    if (s === stack.join('')) result.push('Yes');
    else result.push('No');
})

console.log(result.join('\n'));