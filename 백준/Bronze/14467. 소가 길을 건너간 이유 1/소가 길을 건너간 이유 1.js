const fs = require("fs");
const [n, ...results] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = 0;
let map = new Map();

results.forEach((result) => {
    const [num, location] = result.split(' ').map(Number);
   
    if (map.has(num) && map.get(num) !== location) count++;
    map.set(num, location);
})

console.log(count);