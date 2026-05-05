function solution(m, n, puddles) {
    let dp = Array.from({ length: n }, () => Array(m).fill(0));
    dp[0][0] = 1;
    
    const puddleSet = new Set(
        puddles.map(([x, y]) => `${y - 1},${x - 1}`)
    );
    
    for (let c = 1; c < m; c++) {
        if (puddleSet.has(`${0},${c}`)) {
            dp[0][c] = 0;
            continue;
        }
        
        dp[0][c] = dp[0][c - 1];
    }
    
    for (let r = 1; r < n; r++) {
        if (puddleSet.has(`${r},${0}`)) {
            dp[r][0] = 0;
            continue;
        }
        
        dp[r][0] = dp[r - 1][0];
    }
    
    for (let r = 1; r < n; r++) {
        for (let c = 1; c < m; c++) {

            if (puddleSet.has(`${r},${c}`)) {
                dp[r][c] = 0;
                continue;
            }
            
            dp[r][c] = (dp[r][c - 1] + dp[r - 1][c]) % 1000000007;
        }
    }
    
    console.log(dp.join('\n'));
    return dp[n - 1][m - 1];
}