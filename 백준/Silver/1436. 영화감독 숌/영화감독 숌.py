N = int(input())

num = 1
index = 0
while True:
  if '666' in str(num):
    index += 1
  if index == N:
    break
  num += 1

print(num)