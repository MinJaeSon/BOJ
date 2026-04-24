function solution(s) {
    let ans = Infinity;
    
    if (s.length === 1) {
        return 1;
    }
    
    for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
        let compressed = '';
        let count = 1;
        
        for (let i = 0; i < s.length; i += unit) {
            const cur = s.substring(i, i + unit);   
            const next = s.substring(i + unit, i + unit + unit); // substring은 인덱스가 길이를 초과하면 빈 값을 가져오게 되어 오류를 내지 않는다!
            
            if (cur === next) {
                count++;
            } else {
                compressed += ((count > 1 ? count : '') + cur);
                count = 1;
            }
        }

        const length = compressed.length;
        ans = Math.min(ans, length);
    }
    
    return ans;
}