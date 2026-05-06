function solution(places) {
    const result = [];
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function bfs(place, curx, cury) {
        const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
        const queue = [[curx, cury, 0]];
        visited[curx][cury] = true;
        
        while (queue.length) {
            const [x, y, d] = queue.shift();
                  
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                const nd = d + 1;
                        
                if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
                if (visited[nx][ny]) continue;
                if (place[nx][ny] === 'X') continue;
                if (nd > 2) continue;
                
                if (place[nx][ny] === 'P') {
                    return false;
                }
                
                visited[nx][ny] = true;
                queue.push([nx, ny, nd]);
            }
        }
        
        return true;
    }
    
    for (let place of places) {
        let isGood = true;
        
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                if (place[x][y] === 'P') {
                    if (!bfs(place, x, y)) {
                        isGood = false;
                    }
                }
            }
        }
        
        result.push(isGood ? 1 : 0);
    }

    return result;
}
    
