N = int(input())
T = []
P = []
for _ in range(N):
    t, p = map(int, input().split())
    T.append(t)
    P.append(p)

ans = 0

def dfs(day, earn):
    global ans

    if day == N:
        ans = max(ans, earn)
        return
    
    if day > N:
        return

    dfs(day + T[day], earn + P[day])

    dfs(day + 1, earn)

dfs(0, 0)

print(ans)