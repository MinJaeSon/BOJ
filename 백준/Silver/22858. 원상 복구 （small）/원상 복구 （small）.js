const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
let S_arr = [0, ...input[1].split(' ').map(Number)];
const D_arr = [0, ...input[2].split(' ').map(Number)];
let P_arr = Array(N + 1).fill(0);

for (let suttle = 1; suttle <= K; suttle++) {
    for (let i = 1; i <= N; i++) {
        P_arr[D_arr[i]] = S_arr[i];
    }

    S_arr = P_arr;
    P_arr = Array(N + 1).fill(0);
}

console.log(S_arr.slice(1).join(' '));