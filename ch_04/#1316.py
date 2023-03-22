n = int(input())
count = 0

for i in range(n):
    word = input()
    for j in range(0, len(word)-1):
        if word[j] == word[j+1]:
            pass
        elif word[j] == word[j+1:]:
            count += 1
            break

print(n - count)