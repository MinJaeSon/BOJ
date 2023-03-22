n = int(input())
x, y  = 1, 1
plans = input().split()

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
direction = ['L', 'R', 'U', 'D']

for plan in plans:
    for i in len(direction):
        if plan == direction[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    x, y = nx, ny

print(x, y)