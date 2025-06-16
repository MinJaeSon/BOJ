function solution(want, number, discount) {
    let result = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const arr = discount.slice(i, i + 10);
        let count = 0;
        for (let j = 0; j < want.length; j++) {
            if (arr.filter((val) => val === want[j]).length !== number[j]) break;
            count++;
        }
        if (count === want.length) result++; 
    }
    
    return result;
}