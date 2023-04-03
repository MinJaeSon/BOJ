k = int(input())

list = []
for i in range(k):
    num = int(input())
    if num != 0:
        list.append(num)
    else:
        list.pop()

sum = 0
for i in list:
    sum += i

print(sum)