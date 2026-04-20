function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    
    const queue = [[begin, 0]];
    const visited = Array(words.length).fill(false);
    
    while (queue.length) {
        const [cur, count] = queue.shift();
        
        if (cur === target) {
            return count;
        }
        
        for (let i = 0; i < words.length; i++) {
            if (visited[i]) continue;
            
            const word = words[i];
            let match = 0;
            
            for (let j = 0; j < begin.length; j++) {
                if (cur[j] === word[j]) {
                    match++;
                }
            }
            
            if (match === begin.length - 1) {
                visited[i] = true;
                queue.push([word, count + 1]);
            }
        }
    }
}