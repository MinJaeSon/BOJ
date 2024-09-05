function solution(n) {
    var sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) return (sqrt + 1) ** 2;
    else return -1;
}