const fs = require("fs");
const [N, ...numbers] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function avg(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  const answer = Math.round(sum / N);
  return !answer ? 0 : answer;
}

function mid(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[Math.floor(N / 2)];
}

function mode(numbers) {
  const map = new Map();
  for (let num of numbers) {
    if (map.get(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const sorted = [...map.entries()].sort((a, b) => a[1] - b[1]); // 값(개수)을 기준으로 오름차순 정렬
  const mode = sorted
    .filter((item) => item[1] === sorted[map.size - 1][1])
    .sort((a, b) => a[0] - b[0]);
  if (mode.length > 1) {
    return mode[1][0];
  } else {
    return mode[0][0];
  }
}

function range(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return max - min;
}

console.log(avg(numbers));
console.log(mid(numbers));
console.log(mode(numbers));
console.log(range(numbers));
