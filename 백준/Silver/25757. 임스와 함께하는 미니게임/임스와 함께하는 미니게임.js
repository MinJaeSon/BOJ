const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, game] = input[0].split(' ');
const list = input.slice(1);
const people = new Set(list).size;
let need = 0;
if (game === 'Y') {
  need = 1;
} else if (game === 'F') {
  need = 2;
} else {
  need = 3;
}

console.log(Math.floor(people / need));
