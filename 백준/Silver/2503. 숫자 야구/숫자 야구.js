const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1);
let count = 0;

for (let candidate = 123; candidate <= 987; candidate++) {
  const cand = String(candidate);

  if (cand.includes('0')) {
    continue;
  }
  
  if (new Set(cand).size !== 3) {
    continue;
  }

  let correct = 0;

  for (const line of arr) {
    let [question, S, B] = line.split(' ');
    S = Number(S);
    B = Number(B);

    for (let i = 0; i < 3; i++) {
      if (cand[i] === question[i]) {
        S--;
      } else if (cand.includes(question[i])) {
        B--;
      } else {
        continue;
      }
    }

    if (S === 0 && B === 0) {
      correct++;;
    }
  }

  if (correct === N) {
    count++;
  }
}

console.log(count);