function solution(s){
    var answer = true;
    var p = 0;
    var y = 0;
    s = s.toLowerCase();
    s.split('').forEach(i => {
        if (i === 'p') p += 1;
        if (i === 'y') y += 1;
    })
    if (p === y) answer = true;
    else answer = false;
    return answer;
}