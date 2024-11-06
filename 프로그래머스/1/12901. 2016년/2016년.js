function solution(a, b) {
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU',];
    
    let totalDays = b - 1;
    
    for (let i = 1; i < a; i++) {
        totalDays += daysInMonth[i - 1]
    }
    
    return week[totalDays % 7];
}