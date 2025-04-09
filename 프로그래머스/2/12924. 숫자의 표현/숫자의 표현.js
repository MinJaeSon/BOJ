function solution(n) { 
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;
        
        while (sum < n) {
            sum += num;
            num++;
            
            if (sum === n) {
            result++;
            }
        }
    }
    return result;
}