const fs = require("fs");
let [N, M, S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
M = Number(M);

let count = 0;
let answer = 0;

for (let i = 1; i < M - 1; i++) {
    if (S[i - 1] === 'I' && S[i] === 'O' && S[i + 1] === 'I') {
        count++;
        if (count === N) {
            answer++;
            count--;
        }
        i++;
    } else {
        count = 0;
    }
}

console.log(answer);