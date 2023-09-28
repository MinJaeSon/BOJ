board = input()
# if 'XXXX' in board: # 어차피 존재하면 바꿔주는 것이기 때문에 if문 써줄 필요 X
board = board.replace('XXXX', 'AAAA')   # replace 함수는 바뀐 상태를 저장해주지 않기 때문에 재할당 해줘야 함
board = board.replace('XX', 'BB')

if 'X' in board:
    print(-1)
else:
    print(board)

# board = 'XXXX'
# board.replace('X', 'A')
# print(board)
#
# XXXX















