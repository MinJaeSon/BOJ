const fs = require("fs");
let [N, tops] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
tops = tops.split(' ').map(Number);

let stack = [];
let answer = [];

for (let i = 0; i < N; i++) {

    while (stack.length && tops[stack[stack.length - 1]] < tops[i]) { // 스택의 탑에 있는게 현재 탑보다 작으면 스택 안이 내림차순이 안되기 떄문에 내림차순으로 만들어줌
        stack.pop();
    }

    answer.push(stack.length ? stack[stack.length - 1] + 1 : 0); // 스택이 비었으면 0(자기보다 큰 애가 없는 거니까 레이저를 맞을 애가 없음), 그렇지 않으면 그 탑의 순서(그 탑이 왼쪽에서 가장 먼저 레이저를 맞는 탑)

    stack.push(i);
}

console.log(answer.join(' '));