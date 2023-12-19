function solution(my_string) {
    var answer = [];
    for(let i = 0; i < my_string.length; i++){
        if(isNaN(my_string[i])){
            continue;
        } else {
            answer.push(Number(my_string[i]))
        }
    }
    answer.sort((a,b) => a - b)
    return answer;
}