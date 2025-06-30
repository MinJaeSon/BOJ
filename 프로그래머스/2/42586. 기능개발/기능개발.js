function solution(progresses, speeds) {
    let result = [];
    let stack = [];
    
    progresses.forEach((progress, i) => {
        const cost = Math.ceil((100 - progress) / speeds[i]);
        if (stack.length) {
            if (stack[stack.length - 1] >= cost) {
                stack.push(stack[stack.length - 1]);
            } else {
                result.push(stack.length);
                stack = [cost];
            }
        } else {
            stack.push(cost);
        }
    })
    
    result.push(stack.length);
    
    return result;
}