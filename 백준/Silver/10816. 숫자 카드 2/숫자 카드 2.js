const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const sg_card = input[1].split(' ').map(Number);
const M = Number(input[2]);
const check_card = input[3].split(' ').map(Number);

let sg_map = new Map();
for (let num of sg_card) {
    sg_map.set(num, (sg_map.get(num) ?? 0) + 1);
}

let result = [];
for (let num of check_card) {
    result.push(sg_map.get(num) ?? 0);
}

console.log(result.join(' '));