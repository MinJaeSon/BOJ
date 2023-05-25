d = [0] * 11    # 어차피 수도 작으니 n + 1 대신 그냥 11로 해주고

d[1] = 1
d[2] = 2    # 1+1, 2
d[3] = 4    # 1+1+1, 1+2, 2+1, 3

for i in range(4, 11):  # n은 11보다 작다고 했기 때문
    d[i] = d[i - 3] + d[i - 2] + d[i - 1]

T = int(input())
for _ in range(T):
    n = int(input())
    print(d[n])     # for문 두 번 쓸 필요 없이 여기서 출력까지 한 번에 처리해줌
