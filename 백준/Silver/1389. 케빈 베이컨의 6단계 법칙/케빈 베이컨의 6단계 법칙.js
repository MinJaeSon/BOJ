const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const relations = input.slice(1);
let graph = Array.from({ length: N + 1 }, () => []);

relations.forEach((relation) => {
    const [a, b] = relation.split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
})

// 1: 3, 4
// 2: 3
// 3: 1, 2, 4
// 4: 1, 3, 5
// 5: 4

function bfs(start) {
    let sum = 0;
    let queue = [[start, 0]];
    let visited = Array(N + 1).fill(false);
    visited[start] = true;

    while(queue.length) {
        const [v, d] = queue.shift();
        sum += d;

        for (let neighbor of graph[v]) {
            if (!visited[neighbor]) {
                queue.push([neighbor, d + 1]);
                visited[neighbor] = true;
            }
        }
    }

    return sum;
}

let kavin_bacon = [];
for (let i = 1; i <= N; i++) {
    const result = bfs(i);
    kavin_bacon.push([i, result]);
}

kavin_bacon.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
})

console.log(kavin_bacon[0][0]);