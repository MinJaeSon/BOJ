function solution(n, lost, reserve) {
    let realLost = lost.filter((val) => !reserve.includes(val)).sort((a, b) => a - b);
    const realReserve = reserve.filter((val) => !lost.includes(val)).sort((a, b) => a - b);
    
    let total = n - realLost.length;
    
    for (let r of realReserve) {
        for (let l of realLost) {
            if (l === r - 1 || l === r + 1) {
                total++;
                realLost = realLost.filter((val) => val !== l);
                break;
            }
        }
    }
    
    return total;
}