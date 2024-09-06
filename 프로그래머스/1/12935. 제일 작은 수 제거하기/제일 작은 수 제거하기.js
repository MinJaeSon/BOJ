function solution(arr) {
    var min = Math.min(...arr);
    var answer = arr.filter(x => x !== min);
    return answer.length === 0 ? [-1] : answer;
}