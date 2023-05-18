from collections import deque

n, m, v = map(int, input().split())

graph = [[] for _ in range(n+1)]    # 2차원 리스트(행렬) 만들기. n=2이면 graph = [[], [], []]이 됨
# 입력받으며 동시에 2차원 리스트를 이용한 인접행렬로 표현 바꿔주기
for i in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    graph[x].sort()
    graph[y].sort()

visited1 = [False] * (n+1)
def dfs(graph, v, visited):
    visited[v] = True   # 현재 노드를 방문 처리
    print(v, end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

visited2 = [False] * (n+1)
def bfs(graph, v, visited):
    queue = deque([v])  # 덱 초기화 => 시작 노드 큐에 삽입
    visited[v] = True
    # 큐가 빌 때까지 반복
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True   # 큐에 넣고 방문 처리

dfs(graph, v, visited1)
print()
bfs(graph, v, visited2)