N = int(input())
array = list(map(int, input().split()))
M = int(input())
check = list(map(int, input().split()))

def binary_search(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        if array[mid] == target:
            return mid
        elif array[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
        return None

for i in check:
    result = binary_search(sorted(array), i, 0, N - 1)
    if result != None:
        print(1)
    else:
        print(0)
