function solution(a, b, n) {
    let count = 0;
    let total = 0;
    while (n >= a) {
        count = Math.floor(n / a) * b
        total += count
        n = count + n % a
    }
    return total;
}