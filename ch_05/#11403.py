N = int(input())
graph = [list(map(int, input().split())) for _ in range(N)]

# 플로이드-워셜 알고리즘
for k in range(N):
    for i in range(N):
        for j in range(N):
            if graph[i][k] == 1 and graph[k][j]:
                graph[i][j] = 1

for row in graph:
    for col in row:
        print(col, end=' ')
    print()