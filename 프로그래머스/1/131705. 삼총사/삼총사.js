function solution(number) {
    var count = 0;
    const num = number.length;
    for (let i = 0; i < num; i++) {
        for (let j = i+1; j < num; j++) {
            for (let k = j+1; k < num; k++) {
                if (number[i] + number[j] + number[k] === 0) count += 1;
                else continue;
            }
        }
    }
    return count;
}