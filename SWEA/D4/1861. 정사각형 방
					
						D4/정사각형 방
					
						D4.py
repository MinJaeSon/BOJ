from collections import deque

T = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(start_x, start_y):
    global N, board, memo

    if memo[start_x][start_y] != 0:
        return memo[start_x][start_y]

    queue = deque([[start_x, start_y]])
    
    path = [[start_x, start_y]] 

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or ny < 0 or nx >= N or ny >= N:
                continue

            if board[nx][ny] == board[x][y] + 1:
                if memo[nx][ny] != 0:
                    total_cnt = len(path) + memo[nx][ny]
                    for i, (px, py) in enumerate(path):
                        memo[px][py] = total_cnt - i
                    return memo[start_x][start_y]

                queue.append([nx, ny])
                path.append([nx, ny])
                break 

    total_cnt = len(path)
    for i, (px, py) in enumerate(path):
        memo[px][py] = total_cnt - i

    return memo[start_x][start_y]


for test_case in range(1, T + 1):
    N = int(input())
    board = [list(map(int, input().split())) for _ in range(N)]

    memo = [[0] * N for _ in range(N)]

    max_cnt = 0
    ans_num = 99999999

    for x in range(N):
        for y in range(N):
            cnt = bfs(x, y)
            num = board[x][y]

            if cnt > max_cnt:
                max_cnt = cnt
                ans_num = num
            elif cnt == max_cnt:
                ans_num = min(ans_num, num)

    print(f"#{test_case} {ans_num} {max_cnt}")