function solution(arr) {
    var answer = [...arr];
    let num = 1;
    while(arr.length > num){
        num *= 2;
    }
    for(let i = 0; i < num - arr.length; i++){
        answer.push(0)
    }
    return answer;
}