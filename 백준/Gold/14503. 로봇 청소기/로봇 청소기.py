N, M = map(int, input().split())
r, c, d = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(N)]
di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]
ans = 0

while True:
    if room[r][c] == 0:
        room[r][c] = 2
        ans += 1
    
    noEmpty = True
    for x in range(4):
        d = (d + 3) % 4
        ni = r + di[d]
        nj = c + dj[d]

        if ni < 0 or ni >= N or nj < 0 or nj >= M:
            continue
        
        if room[ni][nj] == 0:
            noEmpty = False
            r, c = ni, nj
            break
        
    if noEmpty:
        ni = r - di[d]
        nj = c - dj[d]
        
        if room[ni][nj] == 1:
            break

        r, c = ni, nj

print(ans)
