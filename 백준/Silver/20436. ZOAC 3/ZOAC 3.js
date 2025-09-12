const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [cur_left, cur_right] = input[0].split(' '); // z o
const str = input[1];
let time = 0;

const keyboards = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], 
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

let keyMap = {};
keyboards.forEach((row, r) => {
    row.forEach((key, c) => {
        keyMap[key] = [r, c];
    })
});

for (let char of str) {
    const [r, c] = keyMap[char]; // 쳐야 할 키의 위치
    // z -> [2, 0]
    // o -> [0, 8]
    // a -> [1, 0]
    // c -> [2, 2]

    let [cur_r, cur_c] = [0, 0];
    if ((r <= 1 && c <= 4) || (r === 2 && c <= 3)) { // 쳐야 할 알파벳이 자음인 경우 -> 왼손 사용
        [cur_r, cur_c] = keyMap[cur_left]; // 현재 왼손의 위치
        cur_left = char; // 왼손이 누르고 있는 키 갱신
    } else { // 쳐야 할 알파벳이 모음인 경우 -> 오른손 사용
        [cur_r, cur_c] = keyMap[cur_right]; // 현재 오른손의 위치
        cur_right = char;
    }
    time += (Math.abs(r - cur_r) + Math.abs(c - cur_c)); // 거리만큼 이동하는 데 걸리는 시간
    time += 1; // 이동 후 누르는 시간
}

console.log(time);