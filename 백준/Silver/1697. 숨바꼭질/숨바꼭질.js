const fs = require("fs");
let [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function bfs(start) {
  let queue = [];
  let visited = Array(K + 1).fill(false);

  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length) {
    const [node, time] = queue.shift();
    if (node === K) return time;

    for (let next of [node - 1, node + 1, node * 2]) {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        queue.push([next, time + 1]);
        visited[next] = true;
      }
    }
  }
}

console.log(bfs(N));
