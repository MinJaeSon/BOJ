n, k = map(int, input().split())
count = 0

while True:
    target = (n // k) * k   #N이 K로 나누어떨어지는 수(=target)로 만들어줌
    count += (n - target)   #1씩 빼는 횟수 한번에 세줌
    n = target

    if n < k:
        break

    count += 1  #N을 K로 나누는 횟수 세줌
    n //= k     #N을 K로 나눔 (나누어 떨어짐)

count += (n - 1)    #(마지막으로 남은 수 - 1)만큼 1씩 빼주는 횟수 더 세줌
print(count)
