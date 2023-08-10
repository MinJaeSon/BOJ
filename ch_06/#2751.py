import sys

N = int(input())
arr = []
for _ in range(N):
    arr.append(int(sys.stdin.readline()))   # 입력 범위 때문에 input()으로 하면 느려서 시간초과
arr.sort()

for i in range(N):
    print(arr[i])