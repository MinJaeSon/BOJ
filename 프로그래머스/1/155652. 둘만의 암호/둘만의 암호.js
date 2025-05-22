function solution(s, skip, index) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabet = alphabet.filter((alpha) => !skip.includes(alpha));
    
    let result = [];
    
    [...s].forEach((c, i) => {
        result.push(alphabet[(alphabet.indexOf(c) + index) % alphabet.length]);
    })
    
    return result.join('');
}