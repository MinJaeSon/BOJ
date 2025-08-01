const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const campus = input.slice(1).map((row) => row.split(''));
let start = [0, 0];
let count = 0;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs(x, y) {
  let queue = [];
  queue.push([x, y]); // 현재 위치 방문 처리

  while (queue.length) {
    const [x, y] = queue.pop(); // 햔재 노드를 큐에서 추출

    // 현재 위치에서 상하좌우로 이동
    for (let i = 0; i < 4; i++) { 
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) { // 이동한 위치가 캠퍼스를 벗어나면 무시
        continue;
      } else if (campus[nx][ny] === 'X') { // 이동한 위치가 벽이면 무시
        continue;
      } else { // 그렇지 않은 경우(정상적인 길)
        if (campus[nx][ny] === 'P') count++; // 사람을 만나면 카운트
        queue.push([nx, ny]); // 큐에 삽입
        campus[nx][ny] = 'X'; // 캠퍼스 좌표 자체에 방문 처리
      }
    }
  }
}

// 시작 위치(도연이의 위치) 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (campus[i][j] === 'I') {
      start = [i, j];
    }
  }
}

bfs(start[0], start[1]);

console.log(count || 'TT'); // 사람을 한 명도 못 만난 경우 TT 출력