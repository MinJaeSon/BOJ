function solution(k, dungeons) {
    let maxCount = 0;
    let visited = Array(dungeons.length + 1).fill(false);
    
    function dfs(hp, count) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= hp) { // 아직 탐험하지 않았고, 최소 필요 피로도를 충족하면
                visited[i] = true; // 방문 처리
                dfs(hp - dungeons[i][1], count + 1) // 남은 피로도로 다른 던전 탐험 + 탐험 횟수 카운트
                visited[i] = false; // 재귀 이후(경로 탐색 이후) 원복(다른 경로에서 해당 던전을 탐색할 수 있도록) => 백트래킹
            }
        }
        maxCount = Math.max(maxCount, count);
    }
    
    dfs(k, 0);
    
    return maxCount;
}