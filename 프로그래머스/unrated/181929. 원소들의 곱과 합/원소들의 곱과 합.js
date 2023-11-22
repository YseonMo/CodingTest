function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let multiply = 1;
    for(let i = 0; i < num_list.length; i++){
        sum = sum + num_list[i]; // 모든 원소들의 합
        multiply = multiply * num_list[i]; // 모든 원솔들의 곱
        if(multiply < sum**2){
            answer = 1;
        } else {
            answer = 0;
        }
    }
    return answer;
}