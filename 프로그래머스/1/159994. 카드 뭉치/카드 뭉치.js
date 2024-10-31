function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    let result = "Yes";
    goal.forEach((word) => {
        switch(word) {
            case cards1[idx1]:
                idx1++;
                break;
            case cards2[idx2]:
                idx2++;
                break;
            default:
                result="No";
                break;
        }
        if (result === "No") return result
    })
    return result;
}