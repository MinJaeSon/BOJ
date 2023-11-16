n = int(input())
arr = sorted(list(map(int, input().split())))
index = arr[(n - 1) // 2]
print(index)