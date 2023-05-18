N = int(input())
arr = []
for _ in range(N):
    x, y = map(int, input().split())
    arr.append([x, y])
arr.sort(key=lambda a : (a[1], a[0]))

for i in range(0, N):
    print(*arr[i])