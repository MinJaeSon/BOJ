function solution(numbers) {
    let result = Array(numbers.length).fill(-1);
    let stack = [];
    
    numbers.forEach((n, i) => {
        while (stack.length && stack[stack.length - 1][0] < n) {
            const top = stack.pop();
            result[top[1]] = n;
        }
        
        stack.push([n, i]);
    });
    
    return result;
}