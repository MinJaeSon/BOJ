function solution(n) {
    var count = 1;
    var result = "";
    while (count <= n) {
        count % 2 !== 0 ? result += "수" : result += "박";
        count += 1;
    }
    return result;
}