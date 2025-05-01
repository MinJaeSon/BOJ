const fs = require("fs");
const [caseNum, ...cases] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result = [];

for (let i = 0; i < caseNum * 2; i+=2) {
    const [N, M] = cases[i].split(' ').map(Number);
    let priorities = cases[i + 1].split(' ').map(Number);
    let queue = priorities.map((priority, idx) => ({ index: idx, priority }));
    let count = 0;

    while (queue.length) {
        const maxPriority = Math.max(...queue.map((item) => item.priority));
        const current = queue.shift();
        if (current.priority < maxPriority) {
            queue.push(current);
        } else {
            count++;
            if (current.index === M) {
                result.push(count);
                break;
            }
        }
    }
}

console.log(result.join('\n'));