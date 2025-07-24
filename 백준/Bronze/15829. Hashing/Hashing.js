const fs = require("fs");
const [L, str] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = Array.from(str);
const r = 31n;
const M = 1234567891n;

let result = 0n;
let pow = BigInt(1);

for(let i=0;i<L;i++) {
  result += BigInt(arr[i].charCodeAt(0) - 96) * pow;
  pow *= r;
}

if(result >= M) result %= M;

console.log(Number(result));