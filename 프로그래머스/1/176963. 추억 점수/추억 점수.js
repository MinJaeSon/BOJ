function solution(name, yearning, photos) {
    let result = [];
    photos.map((photo) => {
        let score = 0;
        photo.map((person) => {
            if (name.includes(person)) {
                score += yearning[name.indexOf(person)]
            }
        })
        result.push(score)
    })
    return result;
}