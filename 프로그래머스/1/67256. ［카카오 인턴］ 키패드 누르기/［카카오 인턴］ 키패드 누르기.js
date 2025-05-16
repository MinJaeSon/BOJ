function solution(numbers, hand) {
    const keypad = {
        '1': '00',
        '2': '01',
        '3': '02',
        '4': '10',
        '5': '11',
        '6': '12',
        '7': '20',
        '8': '21',
        '9': '22',
        '*': '30',
        '0': '31',
        '#': '32'
    };
    
    let currentL = '*';
    let currentR = '#';
    let result = [];
    
    for (let num of numbers) {
        if ([1, 4, 7].some((n) => n === num)) {
            result.push('L');
            currentL = num;
        } else if ([3, 6, 9].some((n) => n === num)) {
            result.push('R');
            currentR = num;
        } else {
            const distanceL = getDistance(currentL, String(num));
            const distanceR = getDistance(currentR, String(num));
            if (distanceL > distanceR) {
                result.push('R');
                currentR = num;
            } else if (distanceL < distanceR) {
                result.push('L');
                currentL = num;
            } else {
                result.push(hand === 'right' ? 'R' : 'L');
                if (hand === 'right') currentR = num;
                else currentL = num;
            }
        }
    }
    
    return result.join('');
    
    function getDistance(current, target) {
        let distance = 0;
        
        for (let i = 0; i < 2; i++) {
            distance += Math.abs(keypad[current][i] - keypad[target][i]);
        }
        
        return distance;
    }
}