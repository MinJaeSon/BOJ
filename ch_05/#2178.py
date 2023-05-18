from collections import deque

n, m = map(int, input().split())
# 2차원 리스트의 맵 정보 입력받기
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# 이동할 네 방향 정의
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# bfs 방식이 유리 -> 시작 위치부터 순차적으로 모든 노드 탐색
def bfs(x, y):
    queue = deque([[x, y]])   # Queue 사용, *시작 위치를 큐에 삽입하며 초기회*

    # 큐가 빌 때까지 반복
    while queue:
        x, y = queue.popleft()
        # 현재 위치에서 네 방향으로의 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= m:    # 미로 탐색 공간을 벗어난 경우 무시
                continue
            if graph[nx][ny] == 0:  # 이동할 수 없는 칸인 경우 무시
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1   # 이동하며 한 칸씩 세기
                queue.append([nx, ny])    # *새로 이동한 위치 값을 큐에 삽입*

    return graph[n-1][m-1]  # 마지막 위치에서 현재까지 센 칸 수 반환

print(bfs(0, 0))