function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const list = [];
    
    function dfs(cur) {
        if (cur.length > 0) {
            list.push(cur);
        }
        
        if (cur.length === 5) return;
        
        for (let i = 0; i < 5; i++) {
            dfs(cur + vowels[i]);
        }
    }
    
    dfs('');
    
    return list.indexOf(word) + 1;
}
