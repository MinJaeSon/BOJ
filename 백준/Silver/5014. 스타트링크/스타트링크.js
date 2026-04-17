const fs = require("fs");
const [F, S, G, U, D] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const visited = Array(F + 1).fill(false);
const queue = [[S, 0]];
let head = 0;

while (head < queue.length) {
    const [cur, count] = queue[head++];

    if (cur === G) {
        console.log(count);
        return;
    }

    for (let next of [cur + U, cur - D]) {
        if (next >= 1 && next <= F && !visited[next]) {
            visited[next] = true;
            queue.push([next, count + 1]);
        }
    }
}

console.log("use the stairs");