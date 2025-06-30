function solution(schedules, timelogs, startday) {
    let count = 0;
    
    schedules.forEach((schedule, i) => {
        let result = true;
        
        for (let j = 0, k = startday; j < 7; j++, k++) {
            if (k % 7 === 6 || k % 7 === 0) {
            } else {
                if (timelogs[i][j] > getApprovalTime(schedule)) {
                    result = false;
                }
            }
        }
        
        if (result) count++;
    })
    
    return count;
    
    function getApprovalTime(time) {
        let h = 0;
        let m = 0;
        
        if (time >= 1000) {
            h = Number(String(time).substring(0, 2));
            m = Number(String(time).substring(2));
        } else {
            h = Number(String(time).substring(0, 1));
            m = Number(String(time).substring(1));
        }
        
        if (m + 10 >= 60) {
            h += 1;
            m = (m + 10) % 60;
        } else {
            m += 10;
        }
        
        return h * 100 + m;
    }
}