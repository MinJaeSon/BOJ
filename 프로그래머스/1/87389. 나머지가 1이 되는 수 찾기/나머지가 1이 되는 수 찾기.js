function solution(n) {
    var answer = 0;

    for (let i = 2; i < n; i++) {
        let result = (n - 1) / i;
        if (Number.isInteger(result)) {
            answer = i;
            break;
        }
    }
    return answer;
}