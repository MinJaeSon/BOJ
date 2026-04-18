function solution(skill, skill_trees) {
    let ans = 0;
    
    for (let skill_tree of skill_trees) {
        const curriculum = [...skill];
        
        let isPossible = true;
        
        for (let alphabet of [...skill_tree]) {
            if (curriculum.includes(alphabet)) {
                if (alphabet === curriculum[0]) {
                    curriculum.shift();
                } else {
                    isPossible = false;
                    break;
                }
            }
        }
        
        if (isPossible) ans++;
    }
    
    return ans;
}