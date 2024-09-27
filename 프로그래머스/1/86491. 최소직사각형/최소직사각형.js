function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            let temp = sizes[i][1];
            sizes[i][1] = sizes[i][0];
            sizes[i][0] = temp;
        }
    }
    const w = Array.from(sizes, x => x[0]);
    const h = Array.from(sizes, x => x[1]);
    return Math.max(...w) * Math.max(...h);
}