from collections import deque

N = int(input())
V = int(input())
graph = [[] for _ in range(N + 1)]
for _ in range(V):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
visited = [False] * (N + 1)

def bfs(start):
    queue = deque([start])
    visited[start] = True
    count = 0

    while queue:
        v = queue.popleft()

        for next in graph[v]:
            if not visited[next]:
                visited[next] = True
                queue.append(next)
                count += 1
    
    return count

print(bfs(1))