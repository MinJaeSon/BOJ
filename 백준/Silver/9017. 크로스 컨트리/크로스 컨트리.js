const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);
const result = [];

for (let t = 1; t <= T; t++) {
    const N = Number(input[t * 2 - 1]);
    const arr = input[t * 2].split(' ').map(Number);

    const map = new Map();
    arr.forEach((player) => {
        map.set(player, (map.get(player) || 0) + 1);
    });

    for (let [key, value] of map) {
        if (value < 6) {
            map.delete(key);
        } else {
            map.set(key, {count: 0, total: 0, fifth: 0});
        }
    }

    score = 1;
    for (let player of arr) {
        if (map.has(player)) {
            if (map.get(player).count <= 4) {
                const newValue = {
                    count: map.get(player).count + 1, // 해당 팀의 몇 번째 도착 선수인지
                    total: map.get(player).count === 4 ? map.get(player).total : map.get(player).total + score, // 해당 팀의 점수 합 (4번째 선수까지)
                    fifth: map.get(player).count === 4 ? score : 0 // 5번째 선수의 점수 (4번까지 총합이 동점일 경우 대비)
                }
                map.set(player, newValue);
            }
            score += 1;
        }
    }

    minScore = Infinity;
    let candidates = [];
    for (let [key, value] of map) {
        if (minScore > value.total) {
            minScore = value.total;
            candidates = [];
            candidates.push(key);
        } else if (minScore === value.total) {
            candidates.push(key);
        }
    }

    minFifthScore = Infinity;
    let winner = null;
    if (candidates.length === 1) {
        winner = candidates[0];
    } else if (candidates.length > 1) {
        for (let candidate of candidates) {
            const fifthScore = map.get(candidate).fifth;
            if (minFifthScore > fifthScore) {
                minFifthScore = fifthScore;
                winner = candidate;
            }
        }
    }
    result.push(winner);
}

console.log(result.join('\n'));