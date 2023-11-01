c = int(input())
link = int(input())
graph = [[] for _ in range(c + 1)]
for i in range(link):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)
    graph[x].sort()
    graph[y].sort()

visited = [False] * (c + 1)

count = 0
def dfs(graph, v, visited):
    visited[v] = True
    global count    # 함수 안에서 함수 밖의 변수를 사용할 때 사용할 수 있지만 가급적 지양하는 것이 좋음
    count += 1
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)
    return count - 1

print(dfs(graph, 1, visited))
