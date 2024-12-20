function solution(k, m, score) {
    var answer = 0;
    // 1) 사과의 점수를 내림차순으로 정렬한다.
    score.sort((a, b) => b-a);   
    
    // 2) 박스에 담을 수 있는 개수(m)을 사용하여 박스의 개수를 구한다.
    let box = Math.floor(score.length / m);

    // 3) 박스의 개수 만큼 반복문
    for(let i=1; i<=box; i++) {
    
        // 4) (박스에 담긴 최소 값) * m 을 answer에 더한다.
        answer += score[m*i-1] * m;
    }
    return answer;
}