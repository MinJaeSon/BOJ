function solution(park, routes) {
    let cur;
    
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[i][j] === 'S') {
                cur = [i, j];
            }
        }
    }
    
    const directions = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1]
    };
    
    for (const route of routes) {
        let [direction, amount] = route.split(' ');
        amount = Number(amount);
        
        let [nx, ny] = cur;
        let step = 0;
        while (step < amount) {
            nx += directions[direction][0];
            ny += directions[direction][1];
            
            if (nx < 0 || ny < 0 || nx >= park.length || ny >= park[0].length || park[nx][ny] === 'X') {
                break;
            }
            step++;
        }
        if (step === amount) cur = [nx, ny];
    }
    
    return cur;
}