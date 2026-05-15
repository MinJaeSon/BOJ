function solution(storey) {
    let cnt = 0;

    while (storey > 0) {
        const current = storey % 10;
        const next = Math.floor(storey / 10);

        if (current > 5 || (current === 5 && next % 10 >= 5)) {
            cnt += 10 - current;
            storey = Math.floor(storey / 10) + 1;
        } else {
            cnt += current;
            storey = Math.floor(storey / 10);
        }
    }
    
    return cnt;
}