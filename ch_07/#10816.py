N = int(input())
arr1 = list(map(int, input().split()))
arr1.sort()  # -10 -10 2 3 3 6 7 10 10 10
M = int(input())
arr2 = list(map(int, input().split()))  # 10 9 -5 2 3 4 5 -10

def binary_search(arr, target, start, end):
    count = 0
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            count += 1  # 1 2 3
            arr.remove(target)  # -10 -10 2 3 3 6 7
            if target in arr:
                continue
            else:
                break
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return count

for i in arr2:
    print(binary_search(arr1, i, 0, N - 1), end=' ')