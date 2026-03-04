function solution(prices) {
    const n = prices.length
    let seconds = Array(n).fill(0);
    let stack = [];
    
    for (let cur = 0; cur < n; cur++) {
        while (stack.length && prices[cur] < prices[stack[stack.length - 1]]) { // 가격이 떨어지면
            const idx = stack.pop();
            const second = cur - idx;
            seconds[idx] = second;
        }
        stack.push(cur);
    }
    
    stack.forEach((idx) => {
        seconds[idx] = n - 1 - idx;
    });
    
    return seconds;
}