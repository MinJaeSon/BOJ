function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function bfs(x, y) {
        const queue = [[x, y]];
        // 시작점이 이미 1이기 때문에 방문 처리 따로 x (어차피 현재 위치에서 잘해야 상하좌우로만 이동할 수 있음)
        
        while (queue.length) {
            const [x, y] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                
                if (maps[nx][ny] === 0) continue;
                
                if (maps[nx][ny] === 1) {
                    queue.push([nx, ny]);
                    maps[nx][ny] = maps[x][y] + 1;    
                }
            }
        }
        
        if (maps[n - 1][m - 1] === 1) {
            return -1;
        } else {
            return maps[n - 1][m - 1];   
        }
    }
    
    return bfs(0, 0);
}