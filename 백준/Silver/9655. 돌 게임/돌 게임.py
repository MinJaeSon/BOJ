n = int(input())

d = [0] * 1001

d[1] = 0    # 0 - 상근
d[2] = 1    # 1 - 창영
for i in range(3, n + 1):
    if d[i - 1] == 0:   # 직전까지의 승자가 상근이었다면
        d[i] = 1    # i번째에서는 창영이가 승
    else:   # 반대로 직전까지의 승자가 창영이었다면
        d[i] = 0    # i번째에서는 상근이가 승

if d[n] == 0:
    print("SK")
else:
    print("CY")