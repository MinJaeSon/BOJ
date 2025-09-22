const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

function getStars(n) {
    if (n === 1) {
        return ['*'];
    }

    const prev = getStars(n - 1);
    const width = prev[0].length;

    return [
        '*'.repeat(width + 4),
        `*${' '.repeat(width + 2)}*`,
        ...prev.map((row) => `* ${row} *`),
        `*${' '.repeat(width + 2)}*`,
        '*'.repeat(width + 4)
    ];
}

console.log(getStars(N).join('\n'));