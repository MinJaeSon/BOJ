const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
let arr = input[1].split(' ').map(BigInt).sort((a, b) => a > b ? 1 : -1); // 근손실 정도를 나타내는 정수 t의 범위는 10^18까지이므로 정확도를 위해 BigInt 사용
let answer = BigInt(0);

if (N % 2 !== 0) {
    answer = arr.pop();
}

for (let i = 0; i < arr.length / 2; i++) {
    // BigInt라서 Math.max() 사용하게 되면 TypeError: Cannot convert a BigInt value to a number 오류 발생
    let sum = arr[i] + arr[(arr.length - 1) - i];
    if (sum > answer) answer = sum;
}

console.log(answer.toString()); // BigInt 자료형은 출력 시 문자열로 변환해야 정수 형식으로 출력됨
