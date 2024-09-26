function solution(t, p) {
    const len = p.length;
    var numbers = [];
    for (let i = 0; i <= t.length - len; i++) {
        numbers.push(t.substr(i, len));       
    }
    numbers = numbers.filter(x => Number(x) <= Number(p));
    return numbers.length;
}