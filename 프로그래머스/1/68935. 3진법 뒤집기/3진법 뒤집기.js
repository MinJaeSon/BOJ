function solution(n) {
    var num = '';
    while (n >= 3) {
        num = num + (n % 3).toString()
        n = Math.floor(n / 3)
    }
    const reverse = num + n.toString();
    
    var result = 0;
    for (let i = 0; i < reverse.length; i++) {
        result += Number(reverse[reverse.length - 1 - i]) * Math.pow(3, i)
    }
    return result;
}