function solution(answers) {
    let result = [];
    
    const supo_1 = [1, 2, 3, 4, 5];
    const supo_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let counts = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supo_1[i % supo_1.length]) counts[0]++;
        if (answers[i] === supo_2[i % supo_2.length]) counts[1]++;
        if (answers[i] === supo_3[i % supo_3.length]) counts[2]++;
    }
    
    const max = Math.max(...counts);
    
    for (let i = 0; i < 3; i++) {
        if (max === counts[i]) {
            result.push(i + 1);
        }
    }
    
    return result.sort();
}