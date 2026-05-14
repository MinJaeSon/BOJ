def strToSecond(str):
    mm, ss = map(int, str.split(':'))
    return mm * 60 + ss

def solution(video_len, pos, op_start, op_end, commands):
    cur = strToSecond(pos)
    op_s = strToSecond(op_start)
    op_e = strToSecond(op_end)
    end = strToSecond(video_len)
    
    if op_s <= cur <= op_e:
        cur = op_e
    
    for cmd in commands:
        if cmd == 'prev':
            cur -= 10
            if cur < 0:
                cur = 0
        
        elif cmd == 'next':
            cur += 10
            if cur > end:
                cur = end
        
        if op_s <= cur <= op_e:
            cur = op_e
           
    mm = cur // 60
    ss = cur % 60
    
    return str(mm).zfill(2) + ':' + str(ss).zfill(2)
