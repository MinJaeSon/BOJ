function solution(str) {
    return str.split(' ').map((s) => {
        if (/^\d/.test(s)) {
            s = s[0] + s.slice(1).toLowerCase(); // "3People" 같은 경우 고려
        } else {
            s = s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();
        }
        return s;
    }).join(' ');
}