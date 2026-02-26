function solution(dirs) {
    const move = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    }
    let visited = new Set();
    let cur = [0, 0];
    
    for (const dir of dirs) {
        const [x, y] = [cur[0], cur[1]];
        const [dx, dy] = [move[dir][0], move[dir][1]];
        const [nx, ny] = [x + dx, y + dy];
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        cur[0] = nx;
        cur[1] = ny;
        
        const route = [[x, y, nx, ny], [nx, ny, x, y]];
        visited.add(route[0].join(''));
        visited.add(route[1].join(''));
    }
    
    return visited.size / 2;
}