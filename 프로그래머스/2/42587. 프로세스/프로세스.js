function solution(priorities, location) {
    let ans = 0;
    let queue = priorities.map((priority, idx) => [priority, idx]);
    let max = Math.max(...priorities);
    let count = 0;
    
    while (queue.length) {
        const head = queue.shift();
        if (head[0] < max) {
            queue.push(head);
        } else {
            count++;
            if (location === head[1]) {
                ans = count;
                break;
            } else {
                max = Math.max(...queue.map((el) => el[0]));
            }
        }
    }
 
    return ans;
}