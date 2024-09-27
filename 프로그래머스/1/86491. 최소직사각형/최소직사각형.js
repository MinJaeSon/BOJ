function solution(sizes) {
    const changed = sizes.map(([x, y]) => (x < y ? [y, x] : [x, y]));
    const w = Array.from(changed, x => x[0]);
    const h = Array.from(changed, x => x[1]);
    return Math.max(...w) * Math.max(...h);
}