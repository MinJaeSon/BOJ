function solution(numbers) {
    let nums = [...numbers];
    let visited = Array(numbers.length).fill(false);
    let set = new Set();
    let answer = 0;
    
    function dfs(n) {
        if (n.length > 0) {
            set.add(Number(n));    
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(n + nums[i]);
                visited[i] = false;
            }
        }
    }
    
    dfs('');
    
    for (let n of set) {
        if (isPrime(n)) {
            answer++;
        }
    }
    
    function isPrime(n) {
        if (n <= 1) {
            return false;
        }
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        
        return true;
    }
    
    return answer;
}