function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    const dx = [-1, 1, 0 , 0];
    const dy = [0, 0, -1, 1];
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (board[x][y] === 'R') {
                // BFS
                const queue = [[x, y, 0]]; // x, y, 이동 횟수
                visited[x][y] = true;
                
                while (queue.length) {
                    const [x, y, count] = queue.shift();
                    
                    if (board[x][y] === 'G') return count;
                    
                    for (let i = 0; i < 4; i++) {
                        let nx = x;
                        let ny = y;
                        
                        // 장애물이나 벽에 부딪힐 때까지 그 방향으로 이동하다가 부딪히면 그때 카운팅
                        while (nx + dx[i] >= 0 && nx + dx[i] < n && 
                               ny + dy[i] >= 0 && ny + dy[i] < m &&
                               board[nx + dx[i]][ny + dy[i]] !== 'D'
                        ) {
                            nx += dx[i];
                            ny += dy[i];
                        }
                        
                        if (!visited[nx][ny]) {
                            visited[nx][ny] = true;
                            queue.push([nx, ny, count + 1]);
                        }
                    }
                }
            }
        }
    }
    return -1;
}