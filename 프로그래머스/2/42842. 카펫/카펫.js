function solution(brown, yellow) {
    let answer = [];
    let y = [];
    for (let i = yellow; i >= Math.sqrt(yellow); i--) {
        if (yellow % i === 0) {
            y.push([i, yellow / i]);
        }
    }
    
    for (let i = 0; i < y.length; i++) {
        const item = y[i];
        const b_width = item[0] + 2;
        const b_height = item[1] + 2;
        if (b_width * b_height - item[0] * item[1] === brown) {
            answer.push(b_width, b_height);
            break;
        }
    }
    
    return answer;
}