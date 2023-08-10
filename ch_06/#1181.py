N = int(input())
arr = []
for i in range(N):
    word = input()
    if word not in arr:     # arr에 없는 단어일 경우 추가
        arr.append(word)
    else:     # 이미 있는 단어면 추가 x
        continue
# arr = list(set(arr)) 이 한 줄로 중복 단어를 없애줄 수도 있다

arr.sort()
arr.sort(key = lambda x : len(x))
for i in range(len(arr)):
    print(arr[i])