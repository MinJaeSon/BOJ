function solution(phone_number) {
    const len = phone_number.length;
    return '*'.repeat(len - 4) + phone_number.substr(-4);
}