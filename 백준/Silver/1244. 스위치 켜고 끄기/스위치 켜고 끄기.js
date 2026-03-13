const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let switches = input[1].split(' ').map((s) => !!Number(s));
const arr = input.slice(3);

arr.forEach((line) => {
    const [gender, num] = line.split(' ').map(Number);

    if (gender === 1) {
        for (let i = 1; i <= Math.floor(N / num); i++) {
            const multiple = num * i;
            switches[multiple - 1] = !switches[multiple - 1];
        }
    } else {
        for (let i = 0; i < N / 2; i++) {
            const left = num - i;
            const right = num + i;

            if (left < 1 || right > N || switches[left - 1] !== switches[right - 1]) {
                break;
            }

            if (i === 0) {
                switches[left - 1] = !switches[left - 1];
                continue;
            }

            switches[left - 1] = !switches[left - 1];
            switches[right - 1] = !switches[right - 1];
        }
    }
});

let result = [];
switches = switches.map((s) => Number(s));

for (let i = 0; i < switches.length; i += 20) {
    result.push(switches.slice(i, i + 20).join(' '));
}

console.log(result.join('\n'));