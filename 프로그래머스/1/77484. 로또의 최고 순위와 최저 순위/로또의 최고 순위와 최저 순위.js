function solution(lottos, win_nums) {
    let matchCount = 0;
    let zeroCount = 0;
    
    lottos.forEach((lotto) => {
        if (lotto === 0) {
            zeroCount++;
        } else if (win_nums.includes(lotto)) {
            matchCount++;
        }
    })
    
    const max = matchCount + zeroCount;
    const min = matchCount;
    
    function getRate(count) {
        if (count <= 6 && count >= 2) {
            return 7 - count;
        } else {
            return 6;
        }
    } 
    
    return [getRate(max), getRate(min)];
}