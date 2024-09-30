function solution(s) {
    var map = {};
    var result = [];
    [...s].map((x, i) => {
        if (x in map) {
            result.push(i - map[x]);
            map[x] = i;
        } else {
            result.push(-1);
            map[x] = i;
        }
    })
    return result;
}