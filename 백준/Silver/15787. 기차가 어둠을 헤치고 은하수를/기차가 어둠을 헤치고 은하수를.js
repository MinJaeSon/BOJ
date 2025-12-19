const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const commands = input.slice(1);
let trains = Array(N + 1).fill(0);
// trainNum : 00000 00000 00000 00100 (맨 우측을 기차의 1번 자리로 봄)

for (let command of commands) {
    const [c, trainNum, seatNum] = command.split(' ').map(Number);

    switch (c) {
        case 1:
            trains[trainNum] |= (1 << (seatNum - 1)); // 3번 자리에 앉히고 싶다 : ...00000에 (...001 -> ...00100)를 OR로 비트마스킹 = 3번 자리만 켜는 결과가 됨
            break;
        case 2:
            trains[trainNum] &= ~(1 << (seatNum - 1)); // 3번 자리에 앉은 사람 하차 : ...00100에 (...001 -> ...00100 -> ...11011)를 AND로 비트마스킹 = 3번 자리를 끄는 결과가 됨
            break;
        case 3:
            trains[trainNum] <<= 1 
            // 10000 00000 00000 00000 
            // 00000 00000 00000 00000가 돼야 하는데 
            // 1 00000 00000 00000 00000 (= 1 << 20)가 돼서 넘어가는 부분은 잘라야 함
            const mask = (1 << 20) - 1; // 20자리만 허용하는 마스크 (0 11111 11111 11111 11111)
            trains[trainNum] &= mask;
            break;
        case 4:
            trains[trainNum] >>= 1
            // 00000 00000 00000 00001
            // 00000 00000 00000 00000 (자동으로 1번 자리는 버려짐)
            break;
    }
}

console.log(new Set(trains.slice(1)).size);