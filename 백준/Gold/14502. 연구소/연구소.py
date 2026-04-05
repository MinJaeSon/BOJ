from collections import deque

N, M = map(int, input().split())
lab = [list(map(int, input().split())) for _ in range(N)]
ans = 0

def buildWall(start, count):
    global ans

    if count == 3:
        safeArea = getSafeArea([row[:] for row in lab])
        ans = max(ans, safeArea)
        return
    
    for idx in range(start, N * M):
        i = idx // M
        j = idx % M

        if lab[i][j] == 0:
            lab[i][j] = 1
            buildWall(idx + 1, count + 1)
            lab[i][j] = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def getSafeArea(lab):
    queue = deque()

    for i in range(N):
        for j in range(M):
            if lab[i][j] == 2:
                queue.append([i, j])

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < N and 0 <= ny < M and lab[nx][ny] == 0:
                lab[nx][ny] = 2
                queue.append([nx, ny])

    area = 0

    for i in range(N):
        for j in range(M):
            if lab[i][j] == 0:
                area += 1

    return area

buildWall(0, 0)

print(ans)