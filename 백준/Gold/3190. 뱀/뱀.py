from collections import deque

N = int(input())
K = int(input())
board = [[0] * N for _ in range(N)]
for _ in range(K):
    x, y = map(int, input().split())
    board[x - 1][y - 1] = 1
L = int(input())
rotation = {}
for _ in range(L):
    X, C = input().split()
    rotation[int(X)] = C

snake = deque([[0, 0]])
s = 0

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
d = 1

while True:
    x, y = snake[len(snake) - 1]  # 현재 뱀의 머리 위치

    # 다음 칸 위치 구하기
    nx, ny = [x + dx[d], y + dy[d]]  # 이동한 뱀의 머리 위치

    # 벽에 닿으면 종료
    if nx < 0 or nx >= N or ny < 0 or ny >= N:
        break

    # 자기 몸에 부딪히면(몸통이 있는 위치 중 현재 머리 위치랑 일치하는게 생기면) 종료
    body = list(snake)[:-1]
    if [nx, ny] in body:
        break

    snake.append([nx, ny])  # 이상 없으면 새로운 머리 위치 추가해서 이동 수행

    if board[nx][ny] == 1:  # 이동한 위치에 사과가 있으면
        board[nx][ny] = 0  # 사과를 먹어서 없앰
        # 꼬리를 땡겨올 필요 없이 그대로 둠 (길이가 늘어나므로)
    else:  # 사과가 없으면
        snake.popleft()  # 꼬리를 땡겨옴
        
    s += 1  # 1초 지나서 카운트

    if s in rotation:  # 방향 전환 타이밍일 경우
        d = (d + (-1 if rotation[s] == 'L' else 1)) % 4  # L이면 왼쪽 방향으로 전환, D이면 오른쪽 방향으로 전환
    # 방향 전환 타이밍 아니면 그냥 원래 방향 그대로

print(s + 1)