function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    let count = 0;
    
    function dfs(cur) {
        if (cur === word) {
            answer = count;
            return true; // 단어를 찾았으니 dfs 탐색을 멈추도록 하기 위해서 true 값을 반환
        }
        
        if (cur.length === 5) return false; // 여기는 없으니까 다른 경로 탐색하도록 넘김
        
        for (let i = 0; i < 5; i++) {
            count++;
            if (dfs(cur + vowels[i])) return true; // true 받고 나도 true 반환
        }
        
        return false;
    }
    
    dfs('');
    
    return answer;
}
