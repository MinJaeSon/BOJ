from collections import Counter

def solution(str1, str2):
    # 대소문자 구분을 하지 않으므로 모두 소문자로 변환
    str1 = str1.lower()
    str2 = str2.lower()
    
    # 2글자씩 끊어서 유효한 알파벳 쌍만 리스트에 추가
    arr1 = [str1[i:i+2] for i in range(len(str1)-1) if str1[i:i+2].isalpha()]
    arr2 = [str2[i:i+2] for i in range(len(str2)-1) if str2[i:i+2].isalpha()]
    
    # 다중집합 카운트 생성
    counter1 = Counter(arr1)
    counter2 = Counter(arr2)
    
    # 교집합과 합집합 원소 개수 계산
    intersection = sum((counter1 & counter2).values())
    union = sum((counter1 | counter2).values())
    
    # 합집합이 0인 경우(두 집합 모두 공집합일 때) 자카드 유사도는 1로 정의
    if union == 0:
        return 65536
    
    # 자카드 유사도에 65536을 곱한 후 소수점 버리기
    jaccard = intersection / union
    return int(jaccard * 65536)
