function solution(absolutes, signs) {
    var sum = 0;
    const n = absolutes.length;
    for (let i = 0; i < n; i++) {
        signs[i] ? sum += absolutes[i] : sum -= absolutes[i];
    }
    return sum;
}