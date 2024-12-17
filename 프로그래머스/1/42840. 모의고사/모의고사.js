function solution(answers) {
     var result = [];
    
  //수포자들 반복되는 규칙
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
  //맞힌 개수
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] == answers[i]) {
      count[0]++;
    }
    if (second[i % second.length] == answers[i]) {
      count[1]++;
    }
    if (third[i % third.length] == answers[i]) {
      count[2]++;
    }
  }

  let max = Math.max(...count);

  for (let j = 0; j < count.length; j++) {
    if (max == count[j]) {
      result.push(j + 1);
    }
  }
  return result;
}