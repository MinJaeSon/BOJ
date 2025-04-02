function solution(s) {    
    const arr = s.split(' ').map(Number).sort((a, b) => a - b);
    const min = String(arr[0]);
    const max = String(arr.reverse()[0]);
    
    return min + ' ' + max;
}