function solution(n) {
    let answer = 0;
    if(Math.sqrt(n) % 1 === 0){
        x = Math.sqrt(n) + 1
        answer = Math.pow(x,2)
    } else {
        answer = -1
    }
    return answer
}