function solution(keymap, targets) {
    let result = [];
    let map = new Map();
    
    keymap.forEach((key, idx) => {
        [...key].forEach((k, i) => {
            if (map.has(k)) {
                if (map.get(k) > i + 1) {
                    map.set(k, i + 1);
                }
            } else {
                map.set(k, i + 1);
            }
        })
    })
    
    targets.forEach((target) => {
        let count = 0;
        
        for (let i = 0; i < target.length; i++) {
            if (map.has(target[i])) {
                count += map.get(target[i]);
            } else {
                count = -1;
                break;
            }
        }
        
        result.push(count);
    })
    
    return result;
}