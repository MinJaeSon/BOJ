const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, d, k, c] = input[0].split(' ').map(Number);
const belt = input.slice(1).map(Number);
const sushi = new Map();
let maxKind = 0;

for (let i = 0; i < k; i++) {
  sushi.set(belt[i], (sushi.get(belt[i]) || 0) + 1);

  let kind = sushi.size;
  if (!sushi.has(c)) {
    kind += 1;
  }

  maxKind = Math.max(maxKind, kind);
};

for (let i = 0; i < n; i++) {
  const del = belt[i];
  sushi.set(del, sushi.get(del) - 1);
  if (sushi.get(del) <= 0) sushi.delete(del);
  
  const add = belt[(i + k) % n];
  sushi.set(add, (sushi.get(add) || 0) + 1);

  let kind = sushi.size;
  if (!sushi.has(c)) {
    kind += 1;
  }

  maxKind = Math.max(maxKind, kind);
}

console.log(maxKind);