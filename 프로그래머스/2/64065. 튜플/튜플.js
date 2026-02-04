function solution(s) {
    let result = [];

    let sets = s.slice(2, -2).split("},{");
    sets = sets.map((set) => set.split(",").map(Number));
    
    sets = sets.sort((a, b) => a.length - b.length);
    sets.forEach((set) => {
        for (let i = 0; i < set.length; i++) {
            if (!result.includes(set[i])) {
                result.push(set[i]);
                break;
            }
        }
    });
    
    return result;
}