const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
let keyChain = new Map();
let result = [];

input.slice(1, N + 1).forEach((memo) => {
    const [site, pw] = memo.split(' ');
    keyChain.set(site, pw);
});

input.slice(N + 1).forEach((targetSite) => {
    result.push(keyChain.get(targetSite));
})

console.log(result.join('\n'));