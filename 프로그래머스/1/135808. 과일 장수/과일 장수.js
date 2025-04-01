function solution(k, m, score) {
    // 3322111 -> 3322 -> 8
    // 444444222211 -> 444 444 222 211 -> 12 12 6 3 = 33
    let result = 0;
    const scoreArr = score.sort((a, b) => b - a);
    
    let startIdx = 0
    for (let i = 0; i < parseInt(score.length / m); i++) {
        const box = scoreArr.slice(startIdx, startIdx + m)
        const min = Math.min(...box)
        result += (min * m)
        startIdx += m
    }
    
    return result;
}