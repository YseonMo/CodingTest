function solution(n){
    let str = String(n);
    let arr = str.split('').map(Number);
    
    let answer = 0;
    for(let i = 0; i < arr.length; i++){
        answer += arr[i]
    }
    return answer
}