function solution(numbers) {
    var sum = 45;
    numbers.forEach(x => sum-= x);
    return sum;
}