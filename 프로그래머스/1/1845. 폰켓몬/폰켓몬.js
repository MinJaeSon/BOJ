function solution(nums) {
    let ponketmon = {};
    nums.forEach((num) => {
        if (num in ponketmon) {
            ponketmon[num]++
        } else {
            ponketmon[num] = 1
        }
    });
    const kind = Object.keys(ponketmon).length;
    const num = nums.length / 2;
    
    return kind < num ? kind : num;
}