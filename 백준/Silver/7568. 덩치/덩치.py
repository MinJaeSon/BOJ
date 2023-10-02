N = int(input())
dungchi = []
for _ in range(N):
    w, h = map(int, input().split())
    dungchi.append([w, h])
# [[55, 185], [58, 183], [88, 186], [60, 175], [46, 155]]

for i in range(N):
    rate = 1
    for j in range(N):
        if dungchi[i][0] < dungchi[j][0] and dungchi[i][1] < dungchi[j][1]:
            rate += 1
    print(rate, end=" ")