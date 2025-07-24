const fs = require("fs");
let [n, ...levels] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(n, levels) {
  if (n === 0) {
    return 0;
  }

  const exclusion = Math.round((n * 0.3) / 2);
  levels = levels.sort((a, b) => a - b).slice(exclusion, n - exclusion);
  return Math.round(levels.reduce((acc, cur) => acc + cur, 0) / (n - exclusion * 2));
}

console.log(solution(n, levels));
