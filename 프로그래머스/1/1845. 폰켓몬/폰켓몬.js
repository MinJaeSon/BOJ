function solution(nums) {
    const n = nums.length / 2;
    const kind = new Set(nums).size;
    return kind > n ? n : kind;
}