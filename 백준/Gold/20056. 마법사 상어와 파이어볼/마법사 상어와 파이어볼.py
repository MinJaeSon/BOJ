from collections import defaultdict

N, M, K = map(int, input().split())
fireballs = defaultdict(list)
for _ in range(M):
    r, c, m, s, d = map(int, input().split())
    fireballs[(r - 1, c - 1)].append([m, s, d])

dr = [-1, -1, 0, 1, 1, 1, 0, -1]
dc = [0, 1, 1, 1, 0, -1, -1, -1]

for _ in range(K):
    moved_fireballs = defaultdict(list)
    for (r, c), fbs in fireballs.items():
        # 모든 파이어볼 이동 처리
        if len(fbs) == 1:
            m, s, d = fbs[0]
            # 이동할 위치 계산
            nr = (r + dr[d] * s) % N
            nc = (c + dc[d] * s) % N
            moved_fireballs[(nr, nc)].append([m, s, d]) # 이동
        else:  # 같은 위치에 여러 개의 파이어볼이 있는 경우
            for fb in fbs:
                m, s, d = fb
                nr = (r + dr[d] * s) % N
                nc = (c + dc[d] * s) % N
                moved_fireballs[(nr, nc)].append([m, s, d])

    # 합치고 나누는 로직 처리
    updated_fireballs = defaultdict(list)
    for (r, c), fbs in moved_fireballs.items():
        if len(fbs) >= 2: # 같은 칸에 파이어볼이 여러 개 있을 경우
            new_m = 0
            new_s = 0
            new_d = []
            count_even = 0

            # 같은 칸에 있는 파이어볼을 하나로 합침
            for fb in fbs:
                m, s, d = fb
                new_m += m
                new_s += s
                if d % 2 == 0:
                    count_even += 1
            
            # 하나로 합친 파이어볼을 4개로 나눔
            new_m //= 5
            new_s //= len(fbs)
            if count_even == 0 or count_even == len(fbs):
                new_d = [0, 2, 4, 6]
            else:
                new_d = [1, 3, 5, 7]

            if new_m != 0: # 파이어볼의 질량이 0이 된게 아니라면
                # 나눠진 4개의 파이어볼을 새로운 격자에 추가
                for i in range(4):
                    updated_fireballs[(r, c)].append([new_m, new_s, new_d[i]])
            # 질량이 0이면 추가되지 않음(소멸)
        else:
            m, s, d = fbs[0]
            updated_fireballs[(r, c)].append([m, s, d])

    fireballs = updated_fireballs

ans = 0

for (r, c), fbs in fireballs.items():
    if len(fbs) == 1:
        m, s, d = fbs[0]
        ans += m
    else:
        for fb in fbs:
            m, s, d = fb
            ans += m
    
print(ans)