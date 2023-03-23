n = int(input())
distance = list(map(int, input().split()))
price = list(map(int, input().split()))

sum = 0
min_price = price[0]
sum += min_price * distance[0]
for i in range(1, n-1):
    if min_price > price[i]:
        min_price = price[i]
    sum += min_price * distance[i]

print(sum)