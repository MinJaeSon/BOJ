N, M = map(int, input().split())
J = int(input())
D = 0   # 바구니가 이동하는 거리
cur_index = 1   # 바구니의 현재 위치(맨왼쪽 기준)
for _ in range(J):
    apple = int(input())
    if cur_index <= apple and apple <= cur_index + (M - 1): # 바구니가 차지하는 M칸에 사과가 떨어진다면
        continue
    else:   # 바구니가 차지하는 M칸의 바깥에 사과가 떨어진다면
        while cur_index > apple or apple > cur_index + (M - 1): # 사과가 바구니가 차지하는 M칸 안에 들어오게 될 때까지
            if cur_index > apple:   # 바구니의 현재 위치가 사과보다 오른쪽이면
                cur_index -= 1  # 바구니를 왼쪽으로 한 칸씩 이동
                D += 1  # 이동 거리 증가
            else:   # 바구니의 현재 위치가 사과보다 왼쪽이면
                cur_index += 1  # 바구니를 오른쪽으로 한 칸씩 이동
                D += 1  # 역시 이동 거리 증가

print(D)
