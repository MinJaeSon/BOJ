const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim();
let temp = [];
let result = '';

for (let char of str) {
    switch (char) {
        case '<':
            if (temp.length) {
                let word = '';
                const len = temp.length;
                for (let i = 0; i < len; i++) {
                    word += temp.pop();
                }
                result += word;
                temp = [];
            }
            temp.push(char);
            break;
        case '>':
            temp.push(char);
            let tag = '';
            for (let i of temp) {
                tag += i;
            }
            result += tag;
            temp = [];
            break;
        case ' ':
            if (temp.includes('<')) {
                temp.push(' ');
            } else {
                let word = '';
                const len = temp.length;
                for (let i = 0; i < len; i++) {
                    word += temp.pop();
                }
                result += word;
                result += ' ';
                temp = [];
            }
            break;
        default:
            temp.push(char);
            break;
    }
}

if (temp.length) {
    let word = '';
    const len = temp.length;
   for (let i = 0; i < len; i++) {
        word += temp.pop();
    }
    result += word;
    temp = [];
}

console.log(result);