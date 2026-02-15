function solution(topping) {
    let answer = 0;
    const leftSet = new Set();
    const rightMap = new Map();
    topping.forEach((el) => rightMap.set(el, (rightMap.get(el) || 0) + 1));
    
    for (let i = 0; i < topping.length; i++) {
        leftSet.add(topping[i]);
        rightMap.set(topping[i], rightMap.get(topping[i]) - 1);
        if (rightMap.get(topping[i]) === 0) {
            rightMap.delete(topping[i]);
        }
        
        if (leftSet.size === rightMap.size) {
            answer++;
        }
    }
    
    return answer;
}