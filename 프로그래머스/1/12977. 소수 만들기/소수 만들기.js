function solution(nums) {
    let count = 0;
    const combination = getCombination(nums, 3);
    
    combination.forEach((c) => {
        if (isPrime(c.reduce((acc, cur, idx) => acc + cur, 0))) {
            count++;
        }
    })
    
    return count;
}

function getCombination(arr, n) {
    let result = [];
    
    if (n === 1) {
        return arr.map((val) => [val]);
    }
    
    arr.forEach((num, i, origin) => {
        const rest = origin.slice(i + 1)
        const combination = getCombination(rest, n - 1)
        const attached = combination.map((c) => [...c, num])
        result.push(...attached)
    })
    
    return result;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}