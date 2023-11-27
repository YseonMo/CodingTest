function solution(start_num, end_num) {
    var answer = [];
    let num;
    for (let num = start_num; num >= end_num; num--){
        answer.push(num)
    }
    return answer;
}