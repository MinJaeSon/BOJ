function solution(k, dungeons) {
    let maxCount = 0;
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    
    function dfs(hp, count) {
        for (let i = 0; i < n; i++) {
            if (!visited[i] && dungeons[i][0] <= hp) {
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