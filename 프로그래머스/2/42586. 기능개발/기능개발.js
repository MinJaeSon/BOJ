function solution(progresses, speeds) {
    let result = [];
    
    for (let i = 0; i < progresses.length; i++) {
        progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    let flag = progresses[0];
    let count = 1;
    
    // 7 3 9
    // 5 10 1 1 10 1
    
    for (let i = 1; i < progresses.length; i++) {
        if (progresses[i] <= flag) {
            count += 1;
        } else {
            result.push(count);
            count = 1;
            flag = progresses[i];
        }
    }
    
    result.push(count);
    
    return result;
}