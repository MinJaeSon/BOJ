N = int(input())
S = [list(map(int, input().split())) for _ in range(N)]
people = set(list(range(N)))
sTeam = [0]
minGap = float('inf')

def pickTeamMembers(start, depth):
    global sTeam

    if depth == N // 2:
        lTeam = list(people - set(sTeam))
        updateMinGap(sTeam, lTeam)
        return
    
    for i in range(start, N):
        sTeam.append(i)
        pickTeamMembers(i + 1, depth + 1)
        sTeam.pop()
    

def updateMinGap(sTeam, lTeam):
    global minGap
    gap = abs(getAbility(sTeam) - getAbility(lTeam))
    minGap = min(minGap, gap)

pair = []
def getAbility(team):
    total = 0

    def pickTwo(start, depth):
        nonlocal total

        if depth == 2:
            i, j = pair
            total += (S[i][j] + S[j][i])
            return
        
        for i in range(start, len(team)):
            pair.append(team[i])
            pickTwo(i + 1, depth + 1)
            pair.pop()

    pickTwo(0, 0)

    return total

pickTeamMembers(1, 1)

print(minGap)