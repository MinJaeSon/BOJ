function solution(n, t, m, p) {
    let arr = '';
    
    for (let i = 0; arr.length < m * t; i++) {
        arr += i.toString(n).toUpperCase();
    }
    console.log(arr);
    
    let result = '';
    
    for (let i = 0; i < arr.length; i++) {
        if (i % m === p - 1) {
            result += arr[i];   
        }
        
        if (result.length === t) break;
    }
    
    return result;
}