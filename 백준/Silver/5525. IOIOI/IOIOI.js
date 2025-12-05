const fs = require("fs");
let [N, M, S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
M = Number(M);
let count = 0;

let P = 'I';
for (let i = 1; i <= N; i++) {
    P += 'OI';
}

let start_idx = S.search(P);
while (start_idx !== -1 && S.length) {
    count++;
    S = S.substring(start_idx + 1);

    start_idx = S.search(P);
}

console.log(count);