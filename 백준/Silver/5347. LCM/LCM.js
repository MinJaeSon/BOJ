const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

function gcd(a, b) {
  while (b !== 0n) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(" ").map(BigInt);
  const lcm = (a * b) / gcd(a, b);
  console.log(lcm.toString()); // BigInt는 문자열로 출력해야 함
}