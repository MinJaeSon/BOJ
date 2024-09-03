function solution(s){
    s = s.toLowerCase();
    if (s.split('p').length === s.split('y').length) return true;
    else return false;
}