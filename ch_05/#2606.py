from collections import deque

com = int(input())
link = int(input())

graph = [[] for _ in range(com + 1)]
for i in range(link):
    a, b = list(map(int, input().split()))
    graph[a].append(b)
    graph[b].append(a)
    graph[a].sort()
    graph[b].sort()

visited = [False] * (com + 1)

def bfs(graph, v, visited):
    queue = deque([v])

    result = 0
    while queue:
        v = queue.popleft()

        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                result += 1

    return result - 1

print(bfs(graph, 1, visited))