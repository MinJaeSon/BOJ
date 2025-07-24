const fs = require("fs");
const [T, ...line] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < T * 2; i += 2) {
  const k = Number(line[i]);
  const n = Number(line[i + 1]);
  let d = Array.from({ length : k + 1}, () => Array(n + 1).fill(0));
  
  for (j = 0; j <= n; j++) {
    d[0][j] = j;
  }

  for (let floor = 1; floor <= k; floor++) {
    for (let unit = 1; unit <= n; unit++) {
      for (let l = 1; l <= unit; l++) {
        d[floor][unit] += d[floor - 1][l];
      }
    }
  }

  console.log(d[k][n]);
}