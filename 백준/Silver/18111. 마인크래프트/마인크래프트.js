const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [N, M, B] = input[0].split(' ').map(Number);
const ground = input.slice(1).map((row) => row.split(' ').map(Number));
let map = new Map();
let answer = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        const h = ground[i][j]
        map.set(h, (map.get(h) || 0) + 1);
    }
}

// 0 2 1 0
// 2 3 0 3
// 2 0 0 1
// {0 => 5, 1 => 2, 2 => 3, 3 => 2}
const [min, max] = [Math.min(...map.keys()), Math.max(...map.keys())];
for (let i = min; i <= max; i++) {
    let time = 0;
    // i보다 낮은 땅(map에서 key가 i 미만)은 i-x만큼 쌓기(*1)
    const lower = [...map.keys()].filter((h) => h < i);
    let need = 0;
    lower.forEach((val) => {
        need += ((i - val) * map.get(val));
    })

    // i보다 높은 땅(map에서 key가 i 초과)은 x-i만큼 제거(*2)
    const higher = [...map.keys()].filter((h) => h > i);
    let remove = 0;
    higher.forEach((val) => {
        remove += ((val - i) * map.get(val));
    })

    if (B + remove < need) continue; // 인벤토리에 블록이 부족할 경우, 해당 높이로 맞추기는 불가능

    time += (need * 1 + remove * 2);
    answer.push([time, i]);
}

answer.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
console.log(answer[0].join(' '));