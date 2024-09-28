function solution(s) {
    const words = s.split(" ");
    const converted = words.map((word) => (
        word.split("").map((a, i) => {
            if (i % 2 === 0) return a.toUpperCase();
            else return a.toLowerCase();
        }).join("")
    )).join(" ");
    return converted;
}