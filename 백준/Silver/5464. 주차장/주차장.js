const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const fees = input.slice(1, N + 1).map(Number);
const cars = input.slice(N + 1, M + N + 1).map(Number);
const access_report = input.slice(M + N + 1).map(Number);

let parking_lot = Array(N).fill(0);
let queue = [];
let total = 0;

access_report.forEach((access) => {
    if (access > 0) { // 차가 들어오는 경우
        if (!parking_lot.some((space) => space === 0)) { // 자리가 하나도 없으면
            queue.push(access); // 대기
        } else { // 자리가 있으면
            const front = parking_lot.findIndex((space) => space === 0);
            parking_lot[front] = access; // 앞쪽부터 채운다

            const payment = fees[front] * cars[access - 1];
            total += payment;
        }
    } else { // 차가 나가는 경우
        access = Math.abs(access);
        const idx = parking_lot.indexOf(access);
        parking_lot[idx] = 0;
        if (queue.length) { // 기다리던 차가 있으면
            const waiting = queue.shift();
            parking_lot[idx] = waiting;

            const payment = fees[idx] * cars[waiting - 1];
            total += payment;
        }
    }
});

console.log(total);