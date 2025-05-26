function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4) {
            if (stack.slice(-4).join('') === '1231') {
                count++;
                stack.splice(-4, 4);
            }
        }
    }
    
    return count;
}