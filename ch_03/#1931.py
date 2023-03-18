n = int(input())
time = []

for i in range(n):
    start, end = map(int, input().split())
    time.append([start, end])

time.sort(key = lambda x: (x[0], x[1]))

count = 1
last_end = time[0][1]
for i in range(1, n):
    if time[i][0] >= last_end:
        count += 1
        last_end = time[i][1]

print(count)

