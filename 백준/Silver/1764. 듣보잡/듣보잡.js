const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const havent_hear = input.slice(1, N + 1);
const havent_see = input.slice(N + 1);

let result = [];

let set = new Set(havent_hear);
havent_see.forEach((name) => {
  if (set.delete(name)) {
    result.push(name);
  }
});

console.log(result.length);
console.log(result.sort().join("\n"));
