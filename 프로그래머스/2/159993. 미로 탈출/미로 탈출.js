function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    const N = maps.length;
    const M = maps[0].length;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maps[i][j] === 'S') {
                const l_result = bfs(i, j, 0, 'L');
                if (!l_result) return -1;
                const [l_end_x, l_end_y, l_dist] = l_result;
                
                const e_result = bfs(l_end_x, l_end_y, 0, 'E');
                if (!e_result) return -1;
                const [e_end_x, e_end_y, e_dist] = e_result;
                
                return l_dist + e_dist;
            }
        }
    }
    
    
    
    function bfs(start_x, start_y, dist, end) {
        const queue = [[start_x, start_y, dist]];
        const visited = Array.from({ length: N }, () => Array(M).fill(false));
        visited[start_x][start_y] = true;
        
        while (queue.length) {
            const [x, y, d] = queue.shift();
            
            if (maps[x][y] === end) {
                return [x, y, d];
            }
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                const nd = d + 1;
                
                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if (maps[nx][ny] === 'X') continue;
                if (visited[nx][ny]) continue;
                
                queue.push([nx, ny, nd]);
                visited[nx][ny] = true;
            }
        }
        
        return false;
    }
}