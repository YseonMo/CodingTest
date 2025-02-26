function solution(n) {
    var answer = 0;
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial *= i
        if(factorial <= n) answer = i
    }
    return answer;
}