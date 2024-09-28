function solution(s) {
    return s.split(" ").map((word) => (
        word.split("").map((a, i) => (
            i % 2 === 0 ? a.toUpperCase() : a.toLowerCase()
        )).join("")
    )).join(" ");
}