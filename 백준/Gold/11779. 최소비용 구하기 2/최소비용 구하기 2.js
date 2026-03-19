const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class PriorityQueue {
    constructor(cmp) {
        this.arr = [null];
        this.cmp = cmp;
    }

    empty() {
        return this.arr.length === 1;
    }

    top() {
        return this.arr[1];
    }

    push(value) {
        this.arr.push(value);
        let cur = this.arr.length - 1;

        while (cur > 1) {
            const parent = Math.floor(cur / 2);

            if (this.cmp(this.arr[cur], this.arr[parent]) >= 0) {
                break;
            }

            [this.arr[cur], this.arr[parent]] = [this.arr[parent], this.arr[cur]];
            cur = parent;
        }
    }

    pop() {
        if (this.empty()) {
            return null;
        }

        [this.arr[this.arr.length - 1], this.arr[1]] = [this.arr[1], this.arr[this.arr.length - 1]];
        this.arr.pop();

        let cur = 1;

        while (cur * 2 < this.arr.length) {
            let child = cur * 2;

            if (child + 1 < this.arr.length && this.cmp(this.arr[child + 1], this.arr[child]) < 0) {
                child += 1;
            }

            if (this.cmp(this.arr[child], this.arr[cur]) >= 0) {
                break;
            }

            [this.arr[child], this.arr[cur]] = [this.arr[cur], this.arr[child]];
            cur = child;
        }
    }
}

const [start, end] = input.slice(-1)[0].split(' ').map(Number);
const N = Number(input[0]);
const M = Number(input[1]);
const methods = input.slice(2, M + 2);

const graph = Array.from({ length: N + 1 }, () => []);
methods.forEach((method) => {
    const [u, v, c] = method.split(' ').map(Number);
    graph[u].push({ to: v, cost: c });
});

const dist = Array(N + 1).fill(Infinity);
const prev = Array(N + 1).fill(null);
const pq = new PriorityQueue((a, b) => a.cost - b.cost);

dist[start] = 0;
pq.push({ node: start, cost: 0 });

while (!pq.empty()) {
    const { node, cost } = pq.top();
    pq.pop();

    if (cost > dist[node]) {
        continue;
    }

    for (const { to, cost: nextCost } of graph[node]) {
        const newCost = cost + nextCost;

        if (newCost < dist[to]) {
            dist[to] = newCost;
            prev[to] = node;
            pq.push({ node: to, cost: newCost });
        }
    }
}

const path = [];
for (let cur = end; cur !== null; cur = prev[cur]) {
    path.push(cur);
}


console.log(dist[end]);
console.log(path.length);
console.log(path.reverse().join(' '));