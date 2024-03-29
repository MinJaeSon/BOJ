N = int(input())
arr1 = list(map(int, input().split()))
arr1.sort()     # 이진탐색을 수행하기 위해 사전에 정렬 수행
M = int(input())
arr2 = list(map(int, input().split()))

def binary_search(arr, target, start, end):
    while start <= end: # 시작 지점이 끝 지점보다 작거나 같을 때
        mid = (start + end) // 2
        if arr[mid] == target:
            return 1
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return 0

for i in arr2:
    print(binary_search(arr1, i, 0, N - 1), end=' ')