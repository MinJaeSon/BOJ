function solution(tickets) {
    tickets.sort();

    const used = Array(tickets.length).fill(false);
    
    function dfs(cur, path) {
        if (path.length === tickets.length + 1) {
            return path;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            
            if (!used[i] && from === cur) {
                used[i] = true;
                
                const result = dfs(to, [...path, to]);
                if (result) return result;
                
                used[i] = false;
            }
        }
        
        return null;
    }
    
    return dfs("ICN", ["ICN"]);
}