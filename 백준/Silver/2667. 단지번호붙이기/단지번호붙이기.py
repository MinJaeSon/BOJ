from collections import deque

n = int(input())
graph = [list(map(int, input())) for _ in range(n)]
result = []  # 결과를 저장할 리스트(각 단지의 집의 수)

# 상하좌우로 좌표를 이동하기 위한 리스트
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(graph, x, y):
    queue = deque([(x,y)])  # 큐 초기화(첫 번째 집의 좌표 추가)
    graph[x][y] = 0  # 첫 번째 집 방문처리
    count = 1  # 첫 번째 집을 방문한 것으로 시작했으므로 1로 초기화

    while queue:
        x, y = queue.popleft()  # 큐에서 하나의 집(x, y)을 꺼낸다
        for i in range(4):
            # 현재 위치에서 상하좌우로 이동
            nx = x + dx[i]
            ny = y + dy[i]

            # 이동한 좌표가 범위를 벗어나면 무시
            if nx < 0 or ny < 0 or nx >= n or ny >= n:
                continue
            
            if graph[nx][ny] == 1:  # 집이 있는 경우
                graph[nx][ny] = 0   # 해당 위치를 방문처리하고
                queue.append((nx, ny))  # 큐에 추가
                count += 1  # 방문한 집 카운트
    return count

# 그래프를 순회하다 집이 있는 경우, bfs를 수행하여 그 집이 있는 단지의 총 집의 수를 구한다
for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            count = bfs(graph, i, j)
            result.append(count)
            count = 0

print(len(result))  # 단지의 수 출력
# 각 단지의 집의 수를 오름차순으로 정렬하여 모두 출력
for i in sorted(result):
    print(i)