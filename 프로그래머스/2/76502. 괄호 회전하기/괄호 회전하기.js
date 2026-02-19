function solution(s) {
    let count = 0;
    let queue = [...s];
    
    for (let i = 0; i < s.length; i++) {
        let stack = [];
        
        for (let j = 0; j < queue.length; j++) {
            const cur = queue[j];
            
            if (stack.length) {
                const top = stack[stack.length - 1];
                switch (cur) {
                    case ']':
                        if (top === '[') {
                            stack.pop();
                        } else {
                            stack.push(cur);
                        }
                        break;
                    case ')':
                        if (top === '(') {
                            stack.pop();
                        } else {
                            stack.push(cur);
                        }
                        break;
                    case '}':
                        if (top === '{') {
                            stack.pop();
                        } else {
                            stack.push(cur);
                        }
                        break;
                    default:
                        stack.push(cur);
                }
            } else {
                stack.push(cur);
            }
        }
        
        if (!stack.length) count++;
        
        queue.push(queue.shift());
    }
    
    return count;
}