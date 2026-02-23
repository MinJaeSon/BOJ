function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0); 
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const half = (sum1 + sum2) / 2;

    if (!Number.isInteger(half)) {
        return -1;
    }
    
    let count = 0;
    let head1 = 0;
    let head2 = 0;
    const maxCount = queue1.length * 3; // 두 큐를 이어진 하나의 배열로 구조화하여 바라볼 수 있다!

    while (count <= maxCount) {
        if (sum1 === half) return count;
        
        if (sum1 < half) {
            const from2 = queue2[head2];
            queue1.push(from2);
            head2++;
            sum2 -= from2;
            sum1 += from2;
        } else if (sum1 > half) {
            const to2 = queue1[head1];
            queue2.push(to2);
            head1++;
            sum1 -= to2;
            sum2 += to2;
        }
        count++;
    }
    
    return -1;
}