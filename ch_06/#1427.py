N = input()
arr = []
for i in N:
    arr.append(i)
arr2 = list(map(int, arr))    # 리스트 요소 숫자로 변환
arr2.sort(reverse=True) # 내림차순 정렬
for i in range(len(arr)):
    print(arr2[i], end='')
