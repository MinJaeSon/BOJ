function solution(n,a,b)
{
    let round = 1;
    
    while (true) {
        if (Math.abs(a - b) === 1 && Math.min(a, b) % 2 === 1) break;
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    
    return round;
}