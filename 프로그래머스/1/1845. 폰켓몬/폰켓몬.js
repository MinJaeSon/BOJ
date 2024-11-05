function solution(nums) {
    const ponketmon = new Set(nums);
    const kind = ponketmon.size;
    const num = nums.length / 2;
    
    return kind < num ? kind : num;
}