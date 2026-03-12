const fs = require("fs");
let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result = "";
for (let i = 0; i < A.length; i++) {
    result += A[i] + B[i];
}

while (result.length > 2) {
   let next = "";
   for (let i = 0; i < result.length - 1; i++) {
        const sum = (Number(result[i]) + Number(result[i+1])) % 10;
        next += sum;
    }
    result = next;
}

console.log(result);