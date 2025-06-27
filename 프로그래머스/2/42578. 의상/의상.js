function solution(clothes) {
    let obj = {};
    for (const [val, key] of clothes) {
        if (!obj[key]) obj[key] = [];
        obj[key].push(val);
    }
    
    let answer = 1;
    Object.keys(obj).forEach((key) => answer *= obj[key].length + 1);
    
    return answer - 1;
}