n = int(input())

d = [0] * 5001

d[3] = 1
d[5] = 1
for i in range(6, 5001):
    d[i] = min(d[i - 3], d[i - 5]) + 1

if d[n] != 0:
    print(d[n])
else:
    print(-1)
