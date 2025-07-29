const fs = require("fs");
let [N, A] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
A = A.split(' ').map(Number);

let d = Array(N).fill(1); // A[i]를 마지막 원소로 하는 LIS의 길이를 저장

for (let i = 1; i < N; i++) {
   for (let j = 0; j < i; j++) {
      if (A[j] < A[i]) {
         d[i] = Math.max(d[i], d[j] + 1);
      }
   }
}

console.log(Math.max(...d));