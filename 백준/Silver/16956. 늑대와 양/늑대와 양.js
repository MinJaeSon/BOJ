const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [R, C] = input[0].split(' ').map(Number);
const farm = input.slice(1).map((row) => row.split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let x = 0; x < R; x++) {
  for (let y = 0; y < C; y++) {
    if (farm[x][y] === "W") {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
  
        if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
          continue;
        }
  
        if (farm[nx][ny] === "S") {
          console.log(0);
          return;
        }
      }
    }
  }
}
 
console.log(1);
for (let i = 0; i < R; i++) {
  console.log(farm[i].map((v) => v === "." ? "D" : v).join(""));
}