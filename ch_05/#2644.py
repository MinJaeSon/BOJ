from collections import deque

n = int(input())
p1, p2 = map(int, input().split())
m = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [False] * (n + 1)

def bfs(graph, start, end):
    queue = deque([start])
    visited[start] = True
    count = 0
    while queue:
        v = queue.popleft()
        count += 1
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
        if v == end:
            return count - 1
    return -1

print(bfs(graph, p1, p2))




"""
from collections import deque

n = int(input())
p1, p2 = map(int, input().split())
m = int(input())

graph = [[] for _ in range(n+1)]
for i in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    graph[x].sort()
    graph[y].sort()

visited = [False] * (n + 1)

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True

    count = 0
    while queue:
        x = queue.popleft()
        if x == p2:
            break

        for i in graph[x]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                count += 1

    if count > 0:
        return count
    else:
        return -1

print(bfs(graph, p1, visited))
"""

"""
from collections import deque

n = int(input())
p1, p2 = map(int, input().split())
m = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(n + 1):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [False] * (n + 1)

def bfs(graph, start, end):
    queue = deque([start])
    visited[start] = True
    count = 0
    while visited[end] == False:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
                count += 1
    return count - 1

print(bfs(graph, p1, p2))
"""