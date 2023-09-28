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
        # 해당 노드와 연결된 아직 방문하지 않은 노드들 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
        if v == end:
            return count - 1
    return -1

print(bfs(graph, p1, p2))

"""
정답코드
from collections import deque


def bfs(s):
    q = deque()
    visited = [0 for _ in range(n+1)]

    q.append(s)
    visited[s] = 1

    while q:
        x = q.popleft()

        for i in tree[x]:
            if visited[i] == 0:
                visited[i] = 1
                result[i] = result[x] + 1
                q.append(i)


n = int(input())
a, b = map(int, input().split())
m = int(input())
tree = [[] for _ in range(n+1)]
result = [0 for _ in range(n+1)]

for _ in range(m):
    x, y = map(int, input().split())
    tree[x].append(y)
    tree[y].append(x)

bfs(a)
if result[b] != 0:
    print(result[b])
else:
    print(-1)
"""


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