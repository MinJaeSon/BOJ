function solution(triangle) {
    let d = [...triangle];
    
    d[1][0] = d[0][0] + d[1][0];
    d[1][1] = d[0][0] + d[1][1];
    
    for (let i = 2; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                d[i][j] = d[i-1][0] + d[i][j];
            } else if (j === triangle[i].length - 1) {
                d[i][j] = d[i-1][j-1] + d[i][j];
            } else {
                d[i][j] = Math.max(d[i-1][j-1], d[i-1][j]) + d[i][j];
            }
        }
    }
    
    return Math.max(...d[triangle.length - 1]);
}