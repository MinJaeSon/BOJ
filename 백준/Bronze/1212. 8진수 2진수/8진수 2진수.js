const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let number = '';
for (let i = 0; i < input.length; i++) {
    const binary = parseInt(input[i], 8).toString(2);
    if (i === 0) {
        number += binary;
    } else {
        number += binary.padStart(3, '0');
    }
}
console.log(number);