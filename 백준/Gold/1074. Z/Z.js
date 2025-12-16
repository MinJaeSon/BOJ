const fs = require("fs");
let [N, r, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let count = 0;

function z(n, r, c) {
    // 재귀 종료 조건
    if (n === 0) return 0;

    const half = 2 ** (n - 1);
    const area = half * half;
    
    // (3, 1) > (1, 1)
    // (7, 7) > (3, 3) > (1, 1)

    // 1사분면
    if (r < half && c < half) { 
        return z(n - 1, r, c);
    }
    // 2사분면
    if (r < half && c >= half) { 
        return area + z(n - 1, r, c - half);
    }
    // 3사분면
    if (r >= half && c < half ) { 
        return area * 2 + z(n - 1, r - half, c);
    }
    // 4사분면
    return area * 3 + z(n - 1, r - half, c - half);

}

console.log(z(N, r, c));
