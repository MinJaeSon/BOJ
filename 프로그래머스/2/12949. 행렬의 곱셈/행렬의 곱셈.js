function solution(arr1, arr2) {
    let answer = [];
    let row = arr1.length;
    let col = arr2[0].length;
    let middle = arr2.length;
    
    for (let r = 0; r < row; r++){
         let arr = [];
        for (let c = 0; c < col; c++){
            let num = 0;
            for (let i = 0; i < middle; i++){
                num += (arr1[r][i] * arr2[i][c]);
            }
            arr.push(num);
        }
        answer.push(arr);
    }
    
    return answer;
}