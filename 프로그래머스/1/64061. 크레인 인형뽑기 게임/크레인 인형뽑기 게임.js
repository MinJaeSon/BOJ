function solution(board, moves) {
    let count = 0;
    let basket = [];
    
    moves.forEach((move) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][move - 1]) {
                basket.push(board[i][move - 1]);
                board[i][move - 1] = 0;
                if (basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.splice(-2);
                    count += 2;
                }
                break;
            }
        }
    })
    
    return count;
}