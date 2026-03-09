function solution(x, y, n) {
    let answer = 0;
    
    if (x === y) return 0;
    
    const visited = new Set([y]);
    const queue = [y];
        
    while (queue.length) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) { // 현재 depth에 있는 노드들을 다 처리한 후에 answer를 증가시켜야 하므로 queue의 크기만큼 순회하는 해당 줄을 추가해주어야 한다 (이 줄을 빼먹으면 꺼낸 노드의 개수만큼 answer가 카운트됨)
            const v = queue.shift();
            
            let count = 0;
            for (const next of [v - n, v / 2, v / 3]) {
                if (next < 1 || !Number.isInteger(next)) {
                    count++;
                    continue;
                }

                if (visited.has(next)) continue;
                
                visited.add(next);
                queue.push(next);

                if (next === x) return answer + 1;
            }
        }
        answer++;
    }
    
    return -1;
}