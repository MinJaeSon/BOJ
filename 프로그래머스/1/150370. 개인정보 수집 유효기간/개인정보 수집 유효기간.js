function solution(today, terms, privacies) {
    let result = [];
    const terms_map = new Map();
    today = today.split('.').join('');
    
    for (let i = 0; i < terms.length; i++) {
        let [type, term] = terms[i].split(' ');
        term = Number(term);
        terms_map.set(type, term);
    }
    
    privacies.forEach((privacy, i) => {
        const [date, type] = privacy.split(' ');
        let [yyyy, mm, dd] = date.split('.').map(Number);
        
        const totalMonth = mm + terms_map.get(type);
        const last_mm = (totalMonth - 1) % 12 + 1;
        const last_yyyy = yyyy + Math.floor((totalMonth - 1) / 12);
        
        const last_day = String(last_yyyy) + String(last_mm).padStart(2, "0") + String(dd).padStart(2, "0");
        
        if (Number(last_day) <= Number(today)) {
            result.push(i + 1);
        }
    });
    
    return result;
}