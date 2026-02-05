function solution(topping) {
    let answer = 0;
    const rMap = new Map();
    const lSet = new Set();
    
    topping.forEach((t) => {
        rMap.set(t, (rMap.get(t) || 0) + 1);
    });
    
    for (let i = 0; i < topping.length; i++) {
        const cur = topping[i];
        lSet.add(cur);
        rMap.set(cur, rMap.get(cur) - 1);
        if (rMap.get(cur) === 0) {
            rMap.delete(cur);
        }
        
        if (lSet.size === rMap.size) answer++;
    }
    
    return answer;
}