function solution(n, arr1, arr2) {
    var result = Array.from({length: n}, () => Array(n).fill(' '));
    var map1 = arr1.map(num => num.toString(2).padStart(n, '0').split(''));
    var map2 = arr2.map(num => num.toString(2).padStart(n, '0').split(''));

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (map1[i][j] === '1' || map2[i][j] === '1') result[i][j] = '#'
        }
    }

    return result.map(arr => arr.join(''));
    
}