function solution(id_list, report, k) {
    let result = new Map(id_list.map((id) => [id, 0]));
    
    let map = new Map(id_list.map((id) => [id, new Set()]));
    
    report.forEach((r) => {
        const [reporter, reported] = r.split(' ');
        map.get(reported).add(reporter);
    });
    
    for (let [reported, reporters] of map) {
        if (reporters.size >= k) {
            reporters.forEach((r) => {
                result.set(r, result.get(r) + 1);
            });
        }
    }
    
    return [...result].map((r) => r[1]);
}