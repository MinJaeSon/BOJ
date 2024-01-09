n = int(input())

d = [0] * 5001
d[3] = 1
d[4] = -1
d[5] = 1
d[6] = 2
d[7] = -1

for i in range(8, n + 1):
    if d[i - 5] != -1 and d[i - 3] != -1:
        d[i] = min(d[i - 5] + 1, d[i - 3] + 1)
    else:
        d[i] = max(d[i - 5] + 1, d[i - 3] + 1)

print(d[n])