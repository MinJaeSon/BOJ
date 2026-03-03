const fs = require("fs");
let [input, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input.split(' ').map(Number);
let mode = '';
let s = '';
let hd = 0;

for (let i = 0; i < M; i++) {
    let nucleotides = new Map();

    for (let j = 0; j < N; j++) {
        const nucleotide = arr[j][i];
        nucleotides.set(nucleotide, (nucleotides.get(nucleotide) || 0) + 1);
    }

    mode = [...nucleotides].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
    s += mode;
    
    hd = [...nucleotides].reduce((acc, cur) => {
        if (cur[0] !== mode) {
            acc += cur[1];
        }
        return acc;
    }, hd);
}

console.log(s);
console.log(hd);