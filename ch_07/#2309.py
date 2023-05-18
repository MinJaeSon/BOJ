from itertools import combinations

arr = []
for _ in range(9):
    height = int(input())
    arr.append(height)

for i in combinations(arr, 7):
    if sum(i) == 100:
        for j in sorted(i):
            print(j)
        break