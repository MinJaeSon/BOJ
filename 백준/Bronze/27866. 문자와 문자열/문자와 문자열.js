const fs = require("fs");
let [string, index] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(string[index - 1]);