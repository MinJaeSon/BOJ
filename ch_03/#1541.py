# 55-50+40-45
n = input().split('-')
# n = ['55', '50+40', '45']
result = 0
for i in n[0].split('+'):
    result += int(i)

for i in n[1:]:
    for j in i.split('+'):
        result -= int(j)

print(result)