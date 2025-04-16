function solution(dartResult) {
    let scores = [];
    let score = 0;
    
    console.log(Number.isInteger(Number(dartResult[0])))
    
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(Number(dartResult[i]))) { // 숫자인 경우
            if (!isNaN(Number(dartResult[i + 1]))) {
                score = 10;
                i++;
            } else {
                score = Number(dartResult[i]);
            }
        } 
        
        else if (dartResult[i] === 'S') {
            scores.push(Math.pow(score, 1));
        } else if (dartResult[i] === 'D') {
            scores.push(Math.pow(score, 2));
        } else if (dartResult[i] === 'T') {
            scores.push(Math.pow(score, 3));
        }
        
        else if (dartResult[i] === '*') {
            scores[scores.length - 1] *= 2;
            scores[scores.length - 2] *= 2;
        } else if (dartResult[i] === '#') {
            scores[scores.length - 1] *= -1;
        }
    }
    
    console.log(scores);
    
    return scores.reduce((acc, cur) => acc + cur, 0);
}