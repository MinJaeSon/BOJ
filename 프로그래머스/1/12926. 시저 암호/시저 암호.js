function solution(s, n) {
    const upper = s.toUpperCase();
    var result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result.push(' ');
            continue;
        }
        let numberCode = upper.charCodeAt(i) + n;
        if (numberCode > 90) {
            numberCode = numberCode - 90 + 64;
        }
        const charCode = String.fromCharCode(numberCode);
        s[i] == s[i].toUpperCase() ? result.push(charCode) : result.push(charCode.toLowerCase());
    }
    return result.join('');
}