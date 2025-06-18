function solution(s) {
    let answer = 0;
    s = [...s]
    
    for (let x = 0; x < s.length; x++) {
        if (x > 0) s.push(s.shift());
        
        if (isProper(s)) {
            answer++;
        }
    }
    
    return answer;
}

function isProper(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push(s[i]);
        } else {
            switch (s[i]) {
                case ']':
                    if (stack[stack.length - 1] === '[') {
                        stack.pop();
                    } else {
                        stack.push(s[i]);
                    }
                    break;
                case '}':
                    if (stack[stack.length - 1] === '{') {
                        stack.pop();
                    } else {
                        stack.push(s[i]);
                    }
                    break;
                case ')':
                    if (stack[stack.length - 1] === '(') {
                        stack.pop();
                    } else {
                        stack.push(s[i]);
                    }
                    break;
                default:
                    stack.push(s[i]);
            }
        }
    }
    
    return stack.length ? false : true;
}