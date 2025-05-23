function solution(X, Y) {
    let xMap = new Map();
    let yMap = new Map();
    
    setMap(xMap, X);
    setMap(yMap, Y);
    
    let result = [];
    
    for (const [key, val] of xMap) {
        if (yMap.has(key)) {
            const count = Math.min(xMap.get(key), yMap.get(key));
            for (let i = 0; i < count; i++) {
                result.push(key);
            }
        }
    }
    
    function setMap(map, numString) {
        for (let num of numString) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }
    }
    
    if (!result.length) {
        return '-1';
    } else if (!result.filter((val) => val !== '0').length) {
        return '0';
    } else {
        return result.sort((a, b) => b - a).join('');
    }
}