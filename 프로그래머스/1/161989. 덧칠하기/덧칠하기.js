function solution(n, m, section) {
    let index = 0;
    let count = 0;
    
    for (let s of section) {
        if (index < s) {
            count++;
            index = s + m - 1;
        }
    }
    
    return count;
}