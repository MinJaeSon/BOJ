const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const original = input.slice(1, n + 1).map((str) => str.split(''));
let playing = input.slice(n + 1).map((str) => str.split(''));

const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
]

let isMine = false;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (playing[i][j] === 'x') {
            if (original[i][j] === '*') {
                isMine = true;
            } else {
                let count = 0;
                for (let k = 0; k < 8; k++) {
                    const ni = i + directions[k][0];
                    const nj = j + directions[k][1];
    
                    if (ni >= 0 && nj >= 0 && ni < n && nj < n) {
                        if (original[ni][nj] === '*') count++;
                    }
                }
                playing[i][j] = count;
            }
        }
    }
}

if (isMine) {
    for (let i = 0; i < n; i++) {
        for (let j = 0 ; j < n; j++) {
            if (original[i][j] === '*') {
                playing[i][j] = '*';
            }
        }
    }
}

console.log(playing.map((row) => row.join('')).join('\n'));
