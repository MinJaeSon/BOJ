function solution(n, computers) {
    let networks = 0;
    let visited = Array(n).fill(false);
    
    function bfs(start) {
        const queue = [start];
        visited[start] = true;
        
        while(queue.length) {
            const v = queue.shift();
            for (let i = 0; i < n; i++) {
                if (computers[v][i] === 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i);
            networks++;
        }
    }
    
    return networks;
}