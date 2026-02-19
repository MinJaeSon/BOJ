function solution(brown, yellow) {
    const sum = brown + yellow;
          
    for (let a = sum; a > 0; a--) {
        const b = sum / a;
        if (!Number.isInteger(b)) continue;
        if (a < b) break;
        
        if ((a + b - 2) * 2 === brown && (a - 2) * (b - 2) === yellow) {
            return [a, b];
        }
    }

}