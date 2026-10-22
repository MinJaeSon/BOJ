function solution(s) {
    const map = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    
    let result = '';
    let word = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i]))) { // 숫자가 나오면
            result += s[i];
        } else { // 문자가 나오면
            word += s[i];
            if (map[word] !== undefined) {
                result += String(map[word]);
                word = '';
            }
        }
    }
    
    return Number(result);
}