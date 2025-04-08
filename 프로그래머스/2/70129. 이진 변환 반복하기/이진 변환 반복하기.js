function solution(s) {
    let count = 0; // 변환 횟수
    let removedZeros = 0; // 제거된 0의 개수
    
    while (s !== '1') {
        const zeros = s.split("").filter(char => char === "0").length;
        removedZeros += zeros;

        s = s.replace(/0/g, "");
        const length = s.length;
        
        s = length.toString(2);
        
        count++;
    }  
    
    return [count, removedZeros];
}