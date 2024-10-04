function solution(array, commands) {
    var result = [];
    commands.map((command) => {
        const [start, end, pos] = command // 구조 분해 할당
        const sliced = array.slice(start - 1, end)
        const sorted = sliced.sort((a, b) => a - b)
        result.push(sorted[pos - 1])
    });
    return result;
}