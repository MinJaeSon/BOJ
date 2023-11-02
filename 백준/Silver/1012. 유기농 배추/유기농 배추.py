import sys

sys.setrecursionlimit(10**9)    # 재귀함수의 깊이 제한을 걸어주어 RecursionError가 뜨지 않도록 한다(DFS 문제 풀 때 유의)

T = int(input())
result = []
for _ in range(T):
    M, N, K = map(int, input().split())
    graph = [[0] * N for _ in range(M)]
    for _ in range(K):
        x, y = map(int, input().split())
        graph[x][y] = 1

    def dfs(x, y):
        if x <= -1 or x >= M or y <= -1 or y >= N:
            return False
        if graph[x][y] == 1:    # 배추가 심어져있다면
            graph[x][y] = 0     # 0으로 방문처리하여 다시 방문하지 않도록 한다
            dfs(x - 1, y)
            dfs(x, y - 1)
            dfs(x + 1, y)
            dfs(x, y + 1)
            return True
        return False

    count = 0
    for i in range(M):
        for j in range(N):
            if dfs(i, j) == True:
                count += 1
    result.append(count)

for i in result:
    print(i)