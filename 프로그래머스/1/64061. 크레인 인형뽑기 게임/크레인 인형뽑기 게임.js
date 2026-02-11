function solution(board, moves) {
    let result = 0;
    let basket = [];
    
    for (const move of moves) {
        const col = move - 1;
        for (let row = 0; row < board.length; row++) {
            if (board[row][col]) {
                const doll = board[row][col];
                board[row][col] = 0;
                
                if (basket.length && basket[basket.length - 1] === doll) {
                    result += 2;
                    basket.pop();
                } else {
                    basket.push(doll);
                }
                break;
            } 
        }
    }
    
    return result;
}