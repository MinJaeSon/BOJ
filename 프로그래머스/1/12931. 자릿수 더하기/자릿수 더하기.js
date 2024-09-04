function solution(num)
{
    return Array.from(String(num), Number).reduce((acc, cur) => acc + cur, 0);
}