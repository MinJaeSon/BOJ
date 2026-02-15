function solution(progresses, speeds) {
    let result = [];
    const rests = progresses.map((progress) => 100 - progress);
    const costs = rests.map((rest, i) => Math.ceil(rest / speeds[i]));
    
    let count = 0;
    let standard = costs[0];
    
    for (let i = 0; i < costs.length; i++) {
        console.log(i);
        if (count === 0) {
            standard = costs[i];
        }
        count++;
        
        if (standard < costs[i + 1] || i === costs.length - 1) {
            result.push(count);
            count = 0;
        }
    }
        // [5, 10, 1, 1, 20, 1]
        // 5 (1) / 10, 1, 1 (3) / 20, 1 (2)
    
    return result;
}