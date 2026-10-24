function solution(want, number, discount) {
    function checkAvailable(map) {
        for (let [key, value] of map) {
            if (value > 0) {
                return false;
            }
        }
        return true;
    }
    
    let result = 0;
    const day = number.reduce((acc, cur) => acc + cur, 0);
    let products = new Map();
    
    want.forEach((product, i) => {
        products.set(product, number[i]);
    });
    
    for (let i = 0; i < day; i++) {
        const target = discount[i];
        products.set(target, (products.get(target) || 0) - 1);
    }

    if (checkAvailable(products)) {
            result++;   
    }
    
    for (let i = 0; i < discount.length - day; i++) {
        const out_target = discount[i];
        products.set(out_target, products.get(out_target) + 1);
        const in_target = discount[i + day];
        products.set(in_target, products.get(in_target) - 1);
        
        if (checkAvailable(products)) {
            result++;   
        }
    }
    
    return result;
}