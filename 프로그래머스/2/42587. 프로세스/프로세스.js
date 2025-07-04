function solution(priorities, location) {
    let answer = 0;
    let max = Math.max(...priorities);
    let indices = priorities.map((_, i) => i);
    
    while (priorities.length) {
        max = Math.max(...priorities);
        
        if (priorities[0] < max) {
            priorities.push(priorities.shift());
            indices.push(indices.shift());
        } else {
            answer++;
            priorities.shift();
            if (indices.shift() === location) return answer;
        }
    }
}