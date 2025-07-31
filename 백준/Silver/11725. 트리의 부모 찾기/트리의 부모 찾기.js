const fs = require("fs");
let [N, ...connections] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);
let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);
let parent = Array(N + 1).fill(0);

connections.forEach((connection) => {
  const [a, b] = connection.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

function dfs(v) {
  visited[v] = true;
  for (let node of graph[v]) {
    if (!visited[node]) {
      parent[node] = v; // 자식 노드를 방문하기 직전에 부모를 기록
      dfs(node);
    }
  }
}

dfs(1);

console.log(parent.slice(2).join("\n"));
