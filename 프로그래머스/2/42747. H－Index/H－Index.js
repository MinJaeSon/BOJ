function solution(citations) {
    for (let i = Math.max(...citations); i >= 0; i--) {
        const count = citations.filter((val) => val >= i).length;
        if (i <= count) return i;
    }
}