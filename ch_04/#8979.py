N, K = map(int, input().split())
medals = [list(map(int, input().split())) for _ in range(N)]    # 2차원 배열 입력받기

medals.sort(key = lambda x: (x[1], x[2], x[3]), reverse = True)     # 금, 은, 동 순으로 기준삼아 내림차순 정렬

# 입력받은 번호의 국가의 인덱스 찾기
for i in range(N):
    if medals[i][0] == K:
        index = i

# 메달 개수가 똑같은 국가가 있을 경우
for i in range(N):
    if medals[index][1:] == medals[i][1:]:
        print(i + 1)    # 인덱스는 0부터 시작인데 국가 번호는 1부터 시작하므로
        break