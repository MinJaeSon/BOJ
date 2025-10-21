const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);
let max = 0;
let map = new Map();
let [l, r] = [0, 0];

while (r < N) {
    map.set(S[r], (map.get(S[r]) || 0) + 1);

    if (map.has(S[r]) && map.get(S[r]) > K) { // K번 넘게 나온 경우
        while (map.get(S[r]) > K) { // K번 보다 작거나 같아질 때까지 왼쪽 포인터 이동시킴
            map.set(S[l], map.get(S[l]) - 1);
            if (map.get(S[l]) === 0) map.delete(S[l]);
            
            l++;
        }
    } 

    max = Math.max(max, r - l + 1);

    r++;
}

console.log(max);