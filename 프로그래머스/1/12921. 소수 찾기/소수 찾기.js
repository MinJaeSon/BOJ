function solution(n) {
    // 에라토스테네스의 체 : 효율적인 소수 판별 알고리즘
    // 배열을 이용해 1부터 n까지의 수 중 소수 여부를 한 번에 판단 가능
    const arr = Array(n + 1).fill(true);
    arr[0] = arr[1] = false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) { // n의 제곱근까지만 반복하여 판별 범위 최적화
        if (arr[i]) {
            for (j = i * i; j <= n; j += i) { // 이전 i의 배수로 소수가 아닌 것으로 이미 걸러졌을 것을 고려 -> 중복 방지를 위해 i * i 부터 검사
                arr[j] = false
            }
        }
    }
    
    return arr.filter(Boolean).length;
}