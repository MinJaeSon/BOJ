function solution(maps) {
    const N = maps[0].length;
    const M = maps.length;
    
    let count_l = 0;
    let count_e = 0;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (let x = 0; x < M; x++) {
        for (let y = 0; y < N; y++) {
            if (maps[x][y] === 'S') {
                let [x_l, y_l] = [0, 0]; 
                let [x_e, y_e] = [0, 0]; 
                
                const res_l = bfs(x, y, 0, 'L');
                if (!res_l) return -1;
                [x_l, y_l, count_l] = res_l;
                
                const res_e = bfs(x_l, y_l, 0, 'E');
                if (!res_e) return -1;
                [x_e, y_e, count_e] = res_e;
                
                return count_l + count_e;
            }
        }
    }
    
    function bfs(x_cur, y_cur, count, target) {
        const queue = [[x_cur, y_cur, count]];
        const visited = Array.from({ length: M }, () => Array(N).fill(false));
        visited[x_cur][y_cur] = true;
        
        while (queue.length) {
            const [x, y, c] = queue.shift();
            
            if (maps[x][y] === target) {
                return [x, y, c];
            }
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                const nc = c + 1;
                
                if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
                if (visited[nx][ny] === true) continue;
                if (maps[nx][ny] === 'X') continue;
                
                visited[nx][ny] = true;
                queue.push([nx, ny, nc]);
            }
        }
        
        return null;
    }
}