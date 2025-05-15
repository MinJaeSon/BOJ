const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, V] = input[0].split(' ').map(Number);
const links = input.slice(1);

let graph = Array.from({ length: N + 1 }, () => []);
let visited1 = Array(N + 1).fill(false);
let visited2 = Array(N + 1).fill(false);
let result1 = [];
let result2 = [];

links.forEach((line) => {
  const [x, y] = line.split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
  graph[x].sort((a, b) => a - b);
  graph[y].sort((a, b) => a - b);
})

dfs(graph, visited1, V);
bfs(graph, visited2, V);
console.log(result1.join(' '));
console.log(result2.join(' '));

function dfs(graph, visited, v) {
  visited[v] = true;
  result1.push(v);
  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, visited, node);
    }
  }
}

function bfs(graph, visited, v) {
  visited[v] = true;
  let queue = [v];
  while (queue.length) {
    const node = queue.shift();
    result2.push(node);
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
}