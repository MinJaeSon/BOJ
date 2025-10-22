const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const files = input.slice(1);
let map = new Map();

files.forEach((file) => {
    const [name, type] = file.split('.');

    map.set(type, (map.get(type) || 0) + 1);
})

map = [...map].sort((a, b) => a[0].localeCompare(b[0]));

console.log(map.map((item) => item.join(' ')).join('\n'));