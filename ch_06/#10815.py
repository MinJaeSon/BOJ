N = int(input())
arr1 = list(map(int, input().split()))
M = int(input())
arr2 = list(map(int, input().split()))

for i in range(M):
    if arr2[i] in arr1:
        print(1, end=' ')
    else:
        print(0, end=' ')