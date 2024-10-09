function solution(strings, n) {
    // return strings.sort((a, b) => a[n] > b[n] ? 1 : -1);
    return strings.sort((a, b) => {
        console.log()
        console.log(a, b, '/', a[n], b[n], '/', a[n] > b[n], '/', a > b)
        
        if (a[n] !== b[n]) {
            if (a[n] > b[n]) {
                return 1
            } else {
                return -1
            }
        } else {
            if (a > b) {
                return 1
            } else {
                return -1
            } 
        }
    });
}