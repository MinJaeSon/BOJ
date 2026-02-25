function solution(want, number, discount) {
    let answer = 0;
    const wantMap = new Map();
    const discountMap = new Map();
    want.forEach((product, i) => wantMap.set(product, number[i]));
    for (let i = 0; i < 10; i++) {
        discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
    }

    for (let head = 0; head <= discount.length - 10; head++) {
        if (head > 0) {
            const out = discount[head - 1];
            const add = discount[head + 9];
            discountMap.set(out, discountMap.get(out) - 1);
            discountMap.set(add, (discountMap.get(add) || 0) + 1);
            if (discountMap.get(out) === 0) discountMap.delete(out);
        }
        
        let isMatch = true;
        for (const key of wantMap.keys()) {
            if (!discountMap.has(key) || wantMap.get(key) !== discountMap.get(key)) {
                isMatch = false;
                break;
            }
        }
        
        if (isMatch) answer++;
    }
    
    return answer;
}