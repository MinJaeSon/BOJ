word = input()
c_alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
#ljes=njak  #_e__ak
cnt = 0
for a in c_alpha:
    if a in word:
        cnt += word.count(a)
        word = word.replace(a, "")
    else:
        continue

cnt += len(word)

print(cnt)

"""
word = input()
c_alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

cnt = 0
for a in c_alpha:
    if a in word:
        word = word.replace(a, "_")

cnt += len(word)
print(cnt)
"""