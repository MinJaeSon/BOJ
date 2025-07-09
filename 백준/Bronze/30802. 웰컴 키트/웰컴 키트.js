const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const list = input[1].split(" ").map(Number);
const [t_unit, pen_unit] = input[2].split(" ").map(Number);

let t_count = 0;
let participants = 0;

list.forEach((req) => {
  t_count += Math.ceil(req / t_unit);
  participants += req;
});

console.log(t_count);
console.log(Math.floor(participants / pen_unit), participants % pen_unit);