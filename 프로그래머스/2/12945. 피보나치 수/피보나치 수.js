function solution(n) {
    let d = [0, 1];
    for (let i = 2; i <= n; i++) {
        d[i] = (d[i - 1] + d[i - 2]) % 1234567;
    }
    return d[n];
}
