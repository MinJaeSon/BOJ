function solution(N, stages) {
    let failRates = [0]; // 각 스테이지별 실패율
    for (let i = 1; i <= N; i++) {
        let total = stages.filter((stage) => stage >= i).length;
        let fail = stages.filter((stage) => stage === i).length;
        failRates[i] = fail / total;
    }
    failRates = failRates.slice(1);
  
    return failRates.map((val, idx) => ({ idx: idx + 1, val }))
        .sort((a, b) => b.val - a.val)
        .map(el => el.idx);
}