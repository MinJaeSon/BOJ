const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const dnas = input.slice(1);
let result = "";
let hd = 0;

for (let i = 0; i < M; i++) {
    let nucleotides = new Map();

    for (let dna of dnas) {
        const nucleotide = dna[i];
        if (nucleotides.has(nucleotide)) {
            nucleotides.set(nucleotide, nucleotides.get(nucleotide) + 1);
        } else {
            nucleotides.set(nucleotide, 1);
        }
    }

    const mode = [...nucleotides].sort((a, b) => a[0].localeCompare(b[0])) // -1 (compareFn: a - b 인거랑 같은 셈. 문자열 비교니까 localCompare 사용)
                                .reduce((acc, cur) => acc[1] >= cur[1] ? acc : cur)[0];
    result += mode;

    hd = [...nucleotides].reduce((acc, cur) => {
        if (cur[0] !== mode) {
            acc += cur[1];
        }
        return acc;
    }, hd);
}

console.log(result);
console.log(hd);
