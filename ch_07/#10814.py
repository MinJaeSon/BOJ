N = int(input())
arr = []
for _ in range(N):
    x, y = input().split()
    arr.append([int(x), y])
arr.sort(key=lambda a : a[0])

for i in range(0, N):
    print(*arr[i])