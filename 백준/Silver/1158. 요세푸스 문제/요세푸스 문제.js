const fs = require('fs');
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let queue = Array.from({ length: n }, (_, i) => i + 1); // 큐 사용
let result = [];
let index = 0;

while (queue.length) {
    index++; // k는 어차피 1 이상이므로 index를 처음부터 1 증가시켜도 무관
    const current = queue.shift(); // 맨 첫 번째 사람 제거
    if (index % k !== 0) { 
        queue.push(current); // 원으로 이어질 수 있도록 끝 인덱스에 다시 추가
    } else {
        result.push(current);
    }
}

console.log('<' + result.join(', ') + '>');