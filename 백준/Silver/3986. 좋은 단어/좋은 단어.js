const fs = require("fs");
const [N, ...words] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = 0;

words.forEach((word) => {
    let stack = [];

    [...word].forEach((al) => {
        if (stack[stack.length - 1] === al) {
            stack.pop();
        } else {
            stack.push(al);
        }
    });

    if (!stack.length) count++;
});

console.log(count);
