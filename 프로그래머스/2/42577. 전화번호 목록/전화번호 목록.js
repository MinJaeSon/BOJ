function solution(phone_book) {
    const hashMap = new Map();
    phone_book.forEach((phone_num) => hashMap.set(phone_num, 1));
    
    for (const phone_num of phone_book) {
        let prefix = "";
        for (const n of phone_num) {
            prefix += n;
            if (hashMap.has(prefix) && phone_num !== prefix) {
                return false;
            }
        }
    }
    
    return true;
} 