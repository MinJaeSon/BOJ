const fs = require('fs');
let [n, ...lines] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let result = [];
let d = Array.from({ length: 30 }, () => Array(30).fill(0));

d[0][1] = d[1][1] = 1;

// d[0][j]는 전부 1로 초기화 (d[1][3], d[1][4]인 경우 생각하면 각각 d[0][2], d[0][3]을 0으로 뒀을 때 결과값에 문제 발생)
for (let i = 0; i < 30; i++) {
    d[0][i] = 1;
}

for (let i = 1; i < 30; i++) {
    for (let j = i; j < 30; j++) {
        d[i][j] = d[i][j - 1] + d[i - 1][j - 1];
    }
}

lines.forEach((tc) => {
    const [w_site, e_site] = tc.split(' ').map(Number);
    result.push(d[w_site][e_site]);
})
console.log(result.join('\n'));