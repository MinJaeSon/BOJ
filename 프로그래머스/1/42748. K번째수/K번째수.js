function solution(array, commands) {
    var result = [];
    commands.map((command) => {
        const sliced = array.slice(command[0] - 1, command[1])
        const sorted = sliced.sort((a, b) => a - b)
        result.push(sorted[command[2] - 1])
    });
    return result;
}