function solution(numbers, target) {
    // 각 숫자마다 선택지가 두 개(+, -) -> 이진 트리 구조 -> 끝까지 가야 합이 완성됨 -> DFS
    let count = 0;
    
    dfs(0, 0);
    
    return count;
    
    function dfs(index, total) { // index = depth
        if (index === numbers.length) { // 재귀 종료 조건
            if (total === target) {
                count++;
            }
            return;
        }
        
        dfs(index + 1, total + numbers[index]); // 해당 depth에서 + 선택 시 뻗는 갈래
        dfs(index + 1, total - numbers[index]); // 해당 depth에서 - 선택 시 뻗는 갈래
    }
            
}