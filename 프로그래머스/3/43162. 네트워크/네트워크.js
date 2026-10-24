function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    function bfs(start) {
        const queue = [start];
        visited[start] = true;
        
        while (queue.length) {
            const cur = queue.shift();
            
            for (let i = 0; i < n; i++) {
                if (computers[cur][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i);
            answer++;
        }
    }
    
    return answer;
}