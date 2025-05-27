function solution(survey, choices) {
    const map = ["RT", "CF", "JM", "AN"];
    let result = [[0, 0], [0, 0], [0, 0], [0, 0]];
    
    survey.forEach((question, i) => {
        const num = map.indexOf([...question].sort().join(''));
        if (choices[i] <= 4) {
            result[num][question === map[num] ? 0 : 1] += getScore(choices[i]);
        } else {
            result[num][question === map[num] ? 1 : 0] += getScore(choices[i]);
        }
        console.log(result);
    })

    let answer = [];
    result.forEach((item, i) => {
        answer.push(item[0] >= item[1] ? map[i][0] : map[i][1])
    })
    
    return answer.join('');
    
    function getScore(choice) {
        switch (choice) {
            case 1:
            case 7:
                return 3;
            case 2:
            case 6:
                return 2;
            case 3:
            case 5:
                return 1;
            case 4:
                return 0;
        }
    }
}