function solution(k, score) {
    var list = [];
    var result = [];
    score.map((s, index) => {
        if (index < k) {
            list.push(s);
        } else {
            if (Math.min(...list) < s) {
                list.pop();
                list.push(s)
            };
        }
        list.sort((a, b) => b - a)
        result.push(Math.min(...list))
    })
    return result;
}