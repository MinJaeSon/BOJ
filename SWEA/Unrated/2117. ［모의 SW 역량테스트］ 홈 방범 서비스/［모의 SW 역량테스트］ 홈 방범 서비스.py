# 기본 제공코드는 임의 수정해도 관계 없습니다. 단, 입출력 포맷 주의
# 아래 표준 입출력 예제 필요시 참고하세요.

# 표준 입력 예제
'''
a = int(input())                        정수형 변수 1개 입력 받는 예제
b, c = map(int, input().split())        정수형 변수 2개 입력 받는 예제 
d = float(input())                      실수형 변수 1개 입력 받는 예제
e, f, g = map(float, input().split())   실수형 변수 3개 입력 받는 예제
h = input()                             문자열 변수 1개 입력 받는 예제
'''

# 표준 출력 예제
'''
a, b = 6, 3
c, d, e = 1.0, 2.5, 3.4
f = "ABC"
print(a)                                정수형 변수 1개 출력하는 예제
print(b, end = " ")                     줄바꿈 하지 않고 정수형 변수와 공백을 출력하는 예제
print(c, d, e)                          실수형 변수 3개 출력하는 예제
print(f)                                문자열 1개 출력하는 예제
'''




'''
아래의 구문은 input.txt 를 read only 형식으로 연 후,
앞으로 표준 입력(키보드) 대신 input.txt 파일로부터 읽어오겠다는 의미의 코드입니다.
여러분이 작성한 코드를 테스트 할 때, 편의를 위해서 input.txt에 입력을 저장한 후,
아래 구문을 이용하면 이후 입력을 수행할 때 표준 입력 대신 파일로부터 입력을 받아올 수 있습니다.
따라서 테스트를 수행할 때에는 아래 주석을 지우고 이 구문을 사용하셔도 좋습니다.
아래 구문을 사용하기 위해서는 import sys가 필요합니다.
단, 채점을 위해 코드를 제출하실 때에는 반드시 아래 구문을 지우거나 주석 처리 하셔야 합니다.
'''
#import sys
#sys.stdin = open("input.txt", "r")

T = int(input())
result = []
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    N, M = map(int, input().split())
    city = []
    for _ in range(N):
        city.append(list(map(int, input().split())))

    houses = []
    for r in range(N):
        for c in range(N):
            if city[r][c] == 1:
                houses.append([r, c])

    maxCount = 0

    for k in range(1, N + 2):   # K를 늘려가면서
        for r in range(N):      # 서비스 영역의 중심이 도시의 0,0 ~ n-1,n-1 로 이동하면서
            for c in range(N):  # 해당 조건에서 서비스를 제공받는 집의 개수를 구한다
                count = 0

                # 서비스 영역을 돌면서 그 안에 포함되는 집을 세지 말고, 집들을 순회하며 서비스 영역에 포함되는지를 확인 (이게 더 빠름)
                for house_r, house_c in houses:
                    # 맨해튼 거리 이용 (마름모 중심 좌표에서 모든 끝점까지의 이동 거리는 K - 1). Cause 마름모의 범위를 수식화하려고 하면 매우 복잡함)
                    dist = abs(house_r - r) + abs(house_c - c)
                    if dist <= k - 1:
                        count += 1

                # 이익을 계산 후 손해가 아니라면 집의 개수를 최대값으로 갱신한다
                profit = (count * M) - (k * k + (k - 1) * (k - 1))
                if profit >= 0:
                    maxCount = max(maxCount, count)

    # 모든 조건에서 위 과정이 끝나면 result 배열에 집 개수의 최대값을 추가한다
    result.append(maxCount)
    # ///////////////////////////////////////////////////////////////////////////////////
for i in range(T):
    print(f'#{i + 1} {result[i]}')