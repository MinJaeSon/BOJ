def solution(m, n, board):
    board = [list(row) for row in board]
    ans = 0
    
    isExisted = True
    
    while(isExisted):
        count = 0
        
        visited = [[False] * n for _ in range(m)]

        for x in range(0, m):
            for y in range(0, n):
                cur = board[x][y]
                
                if cur == 0:
                    continue

                if x + 1 < m and y + 1 < n:
                    nb_1 = board[x][y + 1]
                    nb_2 = board[x + 1][y]
                    nb_3 = board[x + 1][y + 1]

                    if cur == nb_1 == nb_2 == nb_3:
                        visited[x][y] = visited[x][y + 1] = visited[x + 1][y] = visited[x + 1][y + 1] = True
        
        for x in range(m):
            for y in range(n):
                if visited[x][y] == True:
                    count += 1
                    board[x][y] = 0
        
        if count == 0:
            isExisted = False
            continue
        
        ans += count
        
        newBoard = [[0] * n for _ in range(m)]
        
        for c in range(0, n):
            r_new = m - 1
            for r in range(m - 1, -1, -1):
                if board[r][c] != 0:
                    newBoard[r_new][c] = board[r][c]
                    r_new -= 1
        
        board = newBoard
                    
    return ans
                        