function solution(N, stages) {
    let result = {};
    let count = new Map();
    
    stages.forEach((stage) => {
        count.set(stage, (count.get(stage) || 0) + 1);
    });
    
    let arrival = stages.length;
    for (let i = 1; i <= N; i++) {
        const failure = count.get(i) || 0;
        result[i] = !failure ? 0 : failure / arrival;
        arrival -= failure;
    }
    
    return Object.entries(result)
                .sort((a, b) => b[1] - a[1])
                .map((p) => Number(p[0]));
}