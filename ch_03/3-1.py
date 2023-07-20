n = 1260
count = 0

coin_types = [10, 50, 100, 500]

for coin in coin_types:
    count += n // coin
    n %= coin

print(count)