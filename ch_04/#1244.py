word = input().upper()
# MISSISSIPI
alphabet = []
for i in range(len(word)):
    for j in range(i + 1, len(word)):
        if word[i] != word[j]:
            alphabet.append(i)  # alphabet = ['M', 'I', 'S', 'P']

max_count = 0
for i in alphabet:
    if max_count == word.count(i):  # 1, 4, 4, 1
        print("?")
    elif max_count < word.count(i):
        max_count = word.count(i)
        print(i)

