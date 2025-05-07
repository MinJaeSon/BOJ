function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1][words[i - 1].length - 1] !== words[i][0] || words.slice(0, i).includes(words[i])) {
            if ((i + 1) % n === 0) {
                return [n, (i + 1) / n];
            } else {
                return [(i + 1) % n, Math.floor((i + 1) / n) + 1];
            }
        }
    }
    return [0, 0];
}