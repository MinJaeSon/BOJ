const fs = require("fs");
const [n, count, ...links] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);
let answer = 0;

for (let i = 0; i < count; i++) {
    const [x, y] = links[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
    graph[x].sort((a, b) => a - b);
    graph[y].sort((a, b) => a - b);
}

console.log(dfs(graph, 1, visited));

function dfs(graph, v, visited) {
    visited[v] = true;
    answer++;
    for (let node of graph[v]) {
        if (!visited[node]) {
            dfs(graph, node, visited);
        }
    }

    return answer - 1; // 1번 컴퓨터(시작 노드) 제외
}
