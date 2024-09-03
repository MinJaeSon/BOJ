function solution(x, n) {
    var answer = [];
    var count = 1;
    var num = x;
    while (count <= n) {
        answer.push(num);
        num += x;
        count += 1;
    }
    return answer;
}