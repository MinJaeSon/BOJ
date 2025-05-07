function solution(n) {
    let d = Array(n + 1).fill(0);
    
    d[1] = 1;
    d[2] = 2;
    
    for (let i = 3; i < n + 1; i++) {
        d[i] = (d[i - 1] + d[i - 2]) % 1234567;
    }

    return d[n];
}