function solution(A,B){
    A = A.sort((x, y) => x - y);
    B = B.sort((x, y) => y - x);

    return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}