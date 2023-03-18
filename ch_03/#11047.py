import sys

n, k = map(int, input().split())
coin_types = [int(sys.stdin.readline()) for i in range(n)]
count = 0
coin_types.reverse()

for coin in coin_types:
    if coin <= k and k > 0:
        count += k // coin  #아랫줄과 순서 바뀌지 말 것!
        k %= coin
    else:
        continue
print(count)