function solution(participant, completion) {    
    const map = new Map();
    completion.forEach((c) => map.set(c, (map.get(c) || 0) + 1));
    for (const p of participant) {
        if (map.get(p)) {
            map.set(p, map.get(p) - 1);
            if (map.get(p) === 0) {
                map.delete(p);
            }
        } else {
            return p;
        }
    }
}