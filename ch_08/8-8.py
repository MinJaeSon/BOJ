# 정수 N, M을 입력받기
n, m = map(int, input().split())
# N개의 화폐 단위 정보를 입력받기
array = []
for i in range(n):
    array.append(int(input()))

# 한 번 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = [0] * (m + 1)   # 0원부터 m원까지

# 다이나믹 프로그래밍 진행(보텀업)
d[0] = 0    # 0원은 화폐를 아무것도 사용하지 않아도 만들 수 있는 금액임
for i in range(n):  # i는 각각의 화폐 단위를 의미
    for j in range(array[i], m + 1):    # j는 각각의 금액을 의미(현재 확인하는 화폐 단위의 금액부터 m원까지)
        if d[j - array[i]] != 10001:    # (i - k)원을 만드는 방법이 존재하는 경우
            d[j] = min(d[j], d[j - array[i]] + 1)   # 현재 값과 비교해서 더 작은 값으로 갱신

# 계산된 결과 출력
if d[m] == 10001:   # 최종적으로 M원을 만드는 방법이 없는 경우
    print(-1)
else:
    print(d[m])