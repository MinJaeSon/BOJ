const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);
let [l, r] = [0, 0]; // 투포인터로 슬라이딩 윈도우 개념 활용 (윈도우 이동시키면서 그 안에 있는 홀수들만 최대한 삭제하고 남는 짝수의 개수를 셀거임)
let odd_count = 0; // 직전 윈도우의 홀수 개수 저장 (dp의 개념이 포함되나 dp 테이블은 필요 x)
let answer = 0;

while (r < N) {
    if (S[r] % 2) odd_count++; // 윈도우가 변화할 때 이전 홀수의 개수에서 새로운 윈도우 범위(S[r])만 홀수인지 아닌지 확인해서 더해주거나 그냥 두면 됨. (r은 계속 증가하므로!)
    answer = Math.max(answer, (r - l + 1) - odd_count); // 윈도우 내 연속한 짝수 수열의 개수가 최대가 되도록 갱신
    while (odd_count > K) { // 윈도우 내 홀수의 개수가 K보다 크면 K개보다 작거나 같아질 때까지 왼쪽 포인터를 증가하여 이동시킴
        if (S[l] % 2) odd_count--; // 왼쪽이 가리키는 수가 홀수일 경우에 포인터가 이동하며 윈도우 내 홀수의 개수가 하나씩 빠지게 됨
        l++; // 왼쪽 포인터 하나씩 이동
    }
    r++; // 오른쪽 포인터 하나씩 이동하며 윈도우 이동
}

console.log(answer);