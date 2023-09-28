n = int(input())
count = 0

if n % 5 == 0 :
    count += n // 5
else :  # 5로 나누어 떨어지지 않으면
    while n % 5 != 0 and n > 0: # 5로 나누어 떨어지게 될 때까지 + 양수일 때까지(거슬러 줄 수 없는 경우 계속 -2 하다가 음수가 될 수 있으므로)
        n -= 2  # 2씩 빼주기
        count += 1
    count += n // 5

if n < 0:   # n이 음수가 되었다는건 거슬러 줄 수 없는 경우라는 뜻
    print(-1)
else:
    print(count)