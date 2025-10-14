const fs = require("fs");
const [N, target] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let table = Array.from({ length: N }, () => Array(N).fill(0));
let [cur_x, cur_y] = [Math.ceil(N / 2), Math.ceil(N / 2)];
let [target_x, target_y] = [0, 0];

let turn = 1;
table[cur_x - 1][cur_y - 1] = 1;
for (let i = 2; i <= N**2 - N + 1; i+=((turn - 1) * 2)) {
    for (let j = 0; j < turn; j++) {
        if (turn % 2 !== 0) cur_x--;
        else cur_x++;
        table[cur_x - 1][cur_y - 1] = i + j;
    }

    for (let j = 0; j < turn; j++) {
        if (turn % 2 !== 0) cur_y++;
        else cur_y--;
        table[cur_x - 1][cur_y - 1] = i + turn + j;
    }
    
    turn++;
}

for (let i = N**2 - N + 2; i <= N**2; i++) {
    cur_x--;
    table[cur_x - 1][cur_y - 1] = i;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (table[i][j] === target) {
            target_x = i + 1;
            target_y = j + 1;
        }
    }
}

console.log(table.map((row) => row.join(' ')).join('\n'));
console.log(target_x, target_y);