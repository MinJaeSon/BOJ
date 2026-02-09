function solution(nums) {
    let result = 0;
    let map = new Map();
    
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);    
    });

    const kind = map.size;
    const half = nums.length / 2;
    return kind > half ? half : kind;
}