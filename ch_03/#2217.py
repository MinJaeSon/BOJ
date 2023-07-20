N = int(input())
ropes = []
for _ in range(N):
	weight = int(input())
	ropes.append(weight)
ropes.sort()	# 10 15 30 40

for i in range(N):
	ropes[i] = ropes[i] * (N - i)
# 10 10 10 10 = 40 / 15 15 15 = 45 / 30 30 = 60 / 40
print(max(ropes))

"""
N = int(input())
ropes = []
for _ in range(N):
	weight = int(input())
	ropes.append(weight)
ropes.sort()	# 10 15 30 40

max_weight = []
for i in ropes:
	max_weight.append(ropes[i] * (N - i))
# 10 10 10 10 = 40 / 15 15 15 = 45 / 30 30 = 60 / 40
print(max(max_weight))
"""