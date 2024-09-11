function solution(str) {
    const arr = [...str];
    return arr.sort().reverse().join('');
}