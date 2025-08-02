const fs = require("fs");
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let primes = Array(N + 1).fill(true);
primes[0] = primes[1] = false;

let result = [];

// 에라스토테네스의 체
for (let i = 2; i <= Math.sqrt(N); i++) {
  if (primes[i]) {
    // i의 배수들을 소수에서 제외
    for (let j = i * i; j <= N; j += i) { // i * 2, i * 3 등 작은 배수들은 이미 다른 소수의 배수로 제거 되었을 것이므로 i * i 부터 시작해도 됨
      primes[j] = false;
    }
  }
}

primes.reduce((acc, isPrime, index) => {
  if (isPrime && index >= M) {
    result.push(index);
  }
});

console.log(result.join("\n"));