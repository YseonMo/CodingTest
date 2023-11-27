function solution(n) {
    let answer = 0;
    
    if(n % 2 === 1){
        for(let i = 1; i <= n; i += 2){
            answer = answer + i;
        } 
    }else {
        for(let i = 2; i <= n; i += 2){
            answer = answer + Math.pow(i,2)
        }
    }
    return answer;
}