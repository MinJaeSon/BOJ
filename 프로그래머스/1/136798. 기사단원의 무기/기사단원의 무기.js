function solution(number, limit, power) {
    const counts = Array(number + 1).fill(0);
    
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i)  {
            counts[j]++
        }
    }
    
    const result = counts.slice(1).map(count => (count > limit ? power : count));
    
    return result.reduce((acc, cur) => acc + cur);
}