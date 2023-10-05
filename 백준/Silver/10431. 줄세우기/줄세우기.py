# 입력된 아이들의 키를 비교해서 오름차순으로 정렬하고, 정렬하면서 총 몇 칸의 이동이 이루어지는지 묻는 것과 같음
P = int(input())
for i in range(P):
    test_case = list(map(int, input().split()))
    count = 0
    # 서로 인접한 두 원소를 비교하여 순서가 올바르지 않으면 교환하며 정렬하는 '버블정렬'과 같은 메커니즘으로,
    # 결과적으로 아이들을 정렬하는데 버블정렬로 해서 몇 번 정렬을 하면 끝나는지를 묻는 문제임을 알 수 있음
    for j in range(1, len(test_case) - 1):
        for k in range(j + 1, len(test_case)):
            if test_case[j] > test_case[k]:
                test_case[j], test_case[k] = test_case[k], test_case[j]
                count += 1
    print(test_case[0], count)