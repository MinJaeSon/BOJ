const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1).map((x) => x.split(''));
let after = map.map((row) => [...row]); // 주의) let after = map -> map과 같은 참조를 가리키게 돼서 이렇게 하면 안 됨!

for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        let countSea = 0;
        if (map[i][j] === 'X') {
            if (i === 0 || map[i - 1][j] === '.') countSea++; // 상
            if (j === 0 || map[i][j - 1] === '.') countSea++; // 좌
            if (i === R - 1 || map[i + 1][j] === '.') countSea++; // 하
            if (j === C - 1 || map[i][j + 1] === '.') countSea++; // 우
        }

        if (countSea >= 3) {
            after[i][j] = '.';
        }
    }
}

let [minX, minY, maxX, maxY] = [R - 1, C - 1, 0, 0]; 
for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (after[i][j] === 'X') {
            minX = Math.min(minX, i);
            minY = Math.min(minY, j);
            maxX = Math.max(maxX, i);
            maxY = Math.max(maxY, j);
        }
    }
}

result = [];
for (let i = minX; i <= maxX ; i++) {
    let line = "";
    for (let j = minY; j <= maxY; j++) {
        line += after[i][j];
    }
    result.push(line);
}

console.log(result.join('\n'));