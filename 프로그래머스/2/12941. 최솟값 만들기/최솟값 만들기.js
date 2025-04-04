function solution(A,B){
    let sum = 0;

    A = A.sort((x, y) => x - y);
    B = B.sort((x, y) => y - x);
    
    for (let i = 0; i < A.length; i++) {
        sum += A[i] * B[i]
    }

    return sum;
}