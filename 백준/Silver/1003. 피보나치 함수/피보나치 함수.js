const fs = require("fs");
const [T, ...numbers] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let memo = Array(41).fill(null);
memo[0] = [1, 0];
memo[1] = [0, 1];

function fibo(n) {
  if (memo[n]) {
    return memo[n];
  }

  // 재귀 호출을 여기서 하되(fibo 함수 호출), 얻고 싶은 값은 0과 1의 개수이므로 이걸 갱신시킴
  const [zero1, one1] = fibo(n - 1);
  const [zero2, one2] = fibo(n - 2);

  memo[n] = [zero1 + zero2, one1 + one2]; // 0과 1 개수 갱신해서 memo에 기록
  return memo[n];
}

numbers.forEach((N) => {
    const [zero, one] = fibo(N);
    console.log(zero, one);
})