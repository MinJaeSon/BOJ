function solution(a, b) {
    var sum = 0;
    if (a > b) {
        let temp = 0;
        temp = a;
        a = b;
        b = temp;
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}