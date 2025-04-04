function solution(str){
    let stack = [];
    
    [...str].forEach((s) => {
        if (!stack.length || stack[stack.length - 1] === s) {
            stack.push(s);
        } else if (stack.length !== 0 && stack[0] === ')' ) {
            return false;
        } else {
            stack.pop();
        }
    })
    
    return str[0] === ')' || stack.length ? false : true;
}