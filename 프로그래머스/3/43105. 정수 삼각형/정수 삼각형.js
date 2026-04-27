function solution(triangle) {
    let ans = 0;
    const dp = [...triangle];
    
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] += dp[i-1][j];    
            } else if (j === dp[i].length - 1) {
                dp[i][j] += dp[i-1][j-1];
            } else {
                dp[i][j] += Math.max(dp[i-1][j], dp[i-1][j-1]);    
            }
        }
    }
    
    for (let sum of dp[triangle.length - 1]) {
        ans = Math.max(ans, sum);
    }
    
    return ans;
}