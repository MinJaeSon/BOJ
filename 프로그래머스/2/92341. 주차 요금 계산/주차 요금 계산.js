function solution(fees, records) {
    const [ defaultTime, defaultPrice, unitTime, unitPrice ] = fees;
    let cars = [];
    
    records.forEach((record) => {
        const [ time, carNum, status ] = record.split(' ');
        if (cars.some((item) => item.num === carNum)) { // 이미 입차 기록이 있는 차인 경우
            const car = cars.find((item) => item.num === carNum);
            if (status === 'IN') {  // 다시 입차하는 차라면 
                car.in = time; // 입차 시간 기록
            } else { // 출차하는 차라면
                car.out = time; // 출차 시간 기록
                
                // 누적 시간 갱신
                car.totalTime += getMinutes(car.out) - getMinutes(car.in);
                
                // 출차 후 입차 기록에서 해당 번호 차의 입/출차 기록 초기화
                car.in = '';
                car.out = '';
            }
        } else { // 새로 입차하는 차인 경우
            // 새로 정보 기록
            const newCar = { num: carNum, in: time, out: '', totalTime: 0};
            cars.push(newCar);
        }
    })
    
    // 기록상 출차 기록이 없는 차에 대해 시간 계산
    cars.forEach((car) => {
        if (car.in && !car.out) {
            car.totalTime += getMinutes('23:59') - getMinutes(car.in);
        }
    })
    
    cars = cars.sort((a, b) => Number(a.num) - Number(b.num)); // 차량 번호를 기준으로 오름차순 정렬
    
    // 각 차량에 대해 주차 요금 계산
    return cars.map((car) => (
        car.totalTime <= defaultTime ? 
            defaultPrice : defaultPrice + Math.ceil((car.totalTime - defaultTime) / unitTime) * unitPrice
    ))
}

// 문자열로 주어진 시간을 분으로 반환 (총 몇 분인지 구한 후 빼는 것이 시간 계산에 안전함)
function getMinutes(time) {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
}