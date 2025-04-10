function solution(n) {
    let answer = n + 1;
    while (getOneCount(answer) !== getOneCount(n)) {
        answer++;
    }
    return answer;
}

function getOneCount(num) {
    return num.toString(2).split('').map(Number).filter((val) => val === 1).length;
} 