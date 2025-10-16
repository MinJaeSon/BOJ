const fs = require("fs");
let [A, T, S] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let ss = '';
let origin = '0101';
let turn = 0;
let count = 0;

while (count < T) {
    turn++;

    origin += '0'.repeat(turn + 1);
    origin += '1'.repeat(turn + 1);
 
    ss += origin;
    origin = '0101'

    count += (2 + (turn + 1));
}

const index = [...ss].map((x, idx) => [x, idx]).filter((x) => Number(x[0]) === S).filter((x, idx) => idx === T - 1)[0][1];
console.log(index % A);