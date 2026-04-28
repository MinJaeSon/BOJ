function solution(order) {
    let stack = [];
    let idx = 0; // 기사가 원하는 순서(order)의 인덱스

    for (let box = 1; box <= order.length; box++) {
        // 1. 우선 보조 컨베이어 벨트(stack)에 상자를 넣습니다.
        stack.push(box);

        // 2. 보조 벨트의 맨 위 상자가 현재 필요한 상자인지 확인합니다.
        // 일치한다면 계속해서 꺼냅니다 (while문).
        while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop(); // 트럭에 실음
            idx++;       // 다음으로 실어야 할 상자 확인
        }
    }

    return idx; // 트럭에 실린 총 상자의 개수
}