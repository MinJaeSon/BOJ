function solution(arr) {
    arr = arr.sort((a, b) => a - b);
    let result = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        result = getLCM(result, arr[i + 1]);
    }
    return result;
}

function getLCM(num1, num2) {
    let lcm = 1;
    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            break;
        }
        lcm++;
    }
    return lcm;
}