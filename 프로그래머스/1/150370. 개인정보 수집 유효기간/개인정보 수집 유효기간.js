function solution(today, terms, privacies) {
    let result = [];
    
    const today_y = Number(today.split(".")[0]);
    const today_m = Number(today.split(".")[1]);
    const today_d = Number(today.split(".")[2]);
    const today_days = today_y * 12 * 28 + today_m * 28 + today_d;
    
    let validity_terms = {};
    terms.forEach((term) => {
        const [type, num] = term.split(" ");
        validity_terms[type] = Number(num);
    })
    
    privacies.forEach((privacy, i) => {
        const date = privacy.split(" ")[0];
        const y = Number(date.split(".")[0]);
        const m = Number(date.split(".")[1]);
        const d = Number(date.split(".")[2]);
        const type = privacy.split(" ")[1];
        let days = y * 12 * 28 + (m + validity_terms[type]) * 28 + d ;
        console.log(today_days, days);
        if (today_days >= days) result.push(i + 1);
    });
    
    return result;
}