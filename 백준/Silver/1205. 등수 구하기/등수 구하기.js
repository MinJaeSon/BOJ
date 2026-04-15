const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, S, P] = input[0].split(' ').map(Number);
const list = N > 0 ? input[1].split(' ').map(Number).sort((a, b) => b - a) : []; 

if (N === P && list[N - 1] >= S) {
    console.log(-1);
    return;
}

let rank = 1;
for (let i = 0; i < N; i++) {
    if (list[i] > S) {
        rank++;
    } else {
        break;
    }
}

console.log(rank);