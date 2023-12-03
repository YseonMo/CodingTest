function solution(n, k) {
    let answer = 0;
    let drink = Math.floor(n / 10) * 2000;
    
    answer = (n * 12000) + (k * 2000 - drink)
    return answer
}