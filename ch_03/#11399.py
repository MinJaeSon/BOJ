n = int(input())
p_time = list(map(int, input().split()))
p_time.sort()

min_time = 0
for i in range(n):  #[1, 2, 3, 4, 5] -> 1은 5번, 2는 4번, 3은 3번, 4는 2번, 5는 1번 더해짐
    min_time += n * p_time[i]
    n -= 1

print(min_time)