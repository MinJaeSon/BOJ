function solution(babbling) {
    const regex1 = /(aya|ye|woo|ma)\1+/; // 앞의 단어가 한 번 더 나왔는지 중복 확인
    const regex2 = /^(aya|ye|woo|ma)+$/; // 전체 문자열이 해당 단어들로만 이루어졌는지 확인

    return babbling.reduce((ans, word) => {
        if (!regex1.test(word) && regex2.test(word)) {
            ans++;
        }
        return ans;
    }, 0)
}