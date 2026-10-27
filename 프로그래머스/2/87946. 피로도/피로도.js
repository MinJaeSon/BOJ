function solution(k, dungeons) {
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    let maxCount = 0;
    
    function dfs(hp, count) {
        for (let i = 0; i < n; i++) {
            if (hp >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                dfs(hp - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
        maxCount = Math.max(maxCount, count);
    }
    
    dfs(k, 0);
    
    return maxCount;
}