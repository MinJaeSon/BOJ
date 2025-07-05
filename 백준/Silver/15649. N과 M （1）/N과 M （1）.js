const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(n, m) {
  let visited = Array(n + 1).fill(false);
  let progession = [];
  let result = "";

  function dfs() {
    if (progession.length === m) {
      result += `${progession.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        progession.push(i);
        dfs();
        progession.pop(); // 백트래킹 -> [1, 2], [1, 3] 이런 식으로 뽑을 거니까 [1, 2]일 때 2만 제거해서 [1]로 다시 만들어줌
        visited[i] = false; // 백트래킹 -> 제거한 요소는 방문 해제까지 해준다
      }
    }
  }

  dfs();
  
  return result;
}

console.log(solution(N, M));

// 재귀 때문에 백트래킹 과정이 헷갈려서 참고용으로 넣음.
//
// dfs(0): []                  ⬅ 처음
//   └─ dfs(1): [1]
//         └─ dfs(2): [1,2]   ⬅ 출력 → pop 2 → [1]
//         └─ dfs(3): [1,3]   ⬅ 출력 → pop 3 → [1]
//      ⬅ pop 1 → []
//   └─ dfs(1): [2]
//         └─ dfs(2): [2,1] ...