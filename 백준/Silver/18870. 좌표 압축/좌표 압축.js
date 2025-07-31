const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const coordinates = input[1].split(" ").map(Number);
let result = [];
let map = new Map();

[...new Set(coordinates)]
  .sort((a, b) => a - b)
  .forEach((coordinate, i) => {
    map.set(coordinate, i);
  });

coordinates.forEach((coordinate) => {
  result.push(map.get(coordinate));
});

console.log(result.join(" "));
