function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const [N, M] = [maps.length, maps[0].length]; // 맵의 세로, 가로 길이
    let answer = -1;
    
    function bfs(x, y) {
        const queue = [[x, y]];
        
        while (queue.length) {
            const [x, y] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue; // 맵을 벗어나면
                if (maps[nx][ny] === 0) continue; // 벽이면
                if (maps[nx][ny] > 1) continue; // 이미 방문 했으면
                
                queue.push([nx, ny]);
                maps[nx][ny] = maps[x][y] + 1;
            }
        }
    }
    
    bfs(0, 0);
    
    if (maps[N - 1][M - 1] === 1) {
        return -1;
    } else {
        return maps[N - 1][M - 1];
    }
}