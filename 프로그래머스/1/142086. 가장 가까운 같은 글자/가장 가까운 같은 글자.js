function solution(s) {
    var alphabet = new Object();
    var result = [];
    s.split('').forEach((x, i) => {
        if (x in alphabet) {
            const sub = i - alphabet[x];
            alphabet[x] = i;
            result.push(sub);
        } else {
            alphabet[x] = i;
            result.push(-1);
        }
    })
    return result;
}