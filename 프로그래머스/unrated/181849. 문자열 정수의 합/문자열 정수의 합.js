function solution(num_str) {
    var answer = 0;
    num = [...num_str]
    for(let i = 0; i < num.length; i++){
        answer += parseInt(num[i])
    }
    return answer;
}