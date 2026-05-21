for test_case in range(1, 11):
    N = int(input())
    boxes = list(map(int, input().split()))

    for i in range(N):
        boxes.sort()

        if boxes[-1] - boxes[0] <= 1:
            break

        boxes[-1] -= 1
        boxes[0] += 1

    boxes.sort()
    ans = boxes[-1] - boxes[0]

    print(f"#{test_case} {ans}")