n = int(input())
dungchi = []

for i in range(n):
    w, h = map(int, input().split())
    dungchi.append([w, h])

rating = 1
for i in dungchi:
    for j in dungchi:
        if dungchi[i][0] >= dungchi[j][0] and dungchi[i][1] >= dungchi[i+1][1]:
            rating += 1
    print(rating, end=" ")