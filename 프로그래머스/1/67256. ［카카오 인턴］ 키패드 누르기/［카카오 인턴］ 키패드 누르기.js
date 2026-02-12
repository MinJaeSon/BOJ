function solution(numbers, hand) {
    const numpad = [[1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    ['*', 0,'#']];
    let result = '';
    let [leftX, leftY] = [3, 0];
    let [rightX, rightY] = [3, 2];
    let [targetX, targetY] = [0, 0];

    for (const num of numbers) {
        if ([1, 4, 7].includes(num)) {
            for (let row = 0; row < 4; row++) {
                if (numpad[row][0] === num) {
                    [leftX, leftY] = [row, 0];
                }
            }
            result += 'L';
        } else if ([3, 6, 9].includes(num)) {
            for (let row = 0; row < 4; row++) {
                if (numpad[row][2] === num) {
                    [rightX, rightY] = [row, 2];
                }
            }
            result += 'R';
        } else {
            for (let row = 0; row < 4; row++) {
                if (numpad[row][1] === num) {
                    [targetX, targetY] = [row, 1];
                }
            }

            const leftD = Math.abs(leftX - targetX) + Math.abs(leftY - targetY);
            const rightD = Math.abs(rightX - targetX) + Math.abs(rightY - targetY);
            
            if (leftD < rightD) {
                [leftX, leftY] = [targetX, targetY];
                result += 'L';
            } else if (leftD > rightD) {
                [rightX, rightY] = [targetX, targetY];
                result += 'R';
            } else {
                if (hand === 'right') {
                    [rightX, rightY] = [targetX, targetY];
                    result += 'R';
                } else {
                    [leftX, leftY] = [targetX, targetY];
                    result += 'L';
                }
            }
        } 
    }
    
     return result;
}