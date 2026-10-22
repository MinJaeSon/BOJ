function solution(numbers, target) {
    let ans = 0;
    
    function dfs(index, current_sum) {
        if (index === numbers.length) {
            if (current_sum === target) {
                ans++;
            }
            return;
        }
        
        dfs(index + 1, current_sum + numbers[index]);
        dfs(index + 1, current_sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return ans;
}