n = int(input())    # 3 2 10 9 6
drink_list = list(map(int, input().split()))
drink_list.sort(reverse=True)   # 10 9 6 3 2

result = drink_list[0]
for i in range(1, n):
    result += drink_list[i] / 2

print(result)

"""
n = int(input())    # 3 2 10 9 6
drink_list = list(map(int, input().split()))
drink_list.sort()   # 2 3 6 9 10

result = drink_list[n - 1]
for i in range(n - 1):
    result += drink_list[i] / 2

print(result)
"""