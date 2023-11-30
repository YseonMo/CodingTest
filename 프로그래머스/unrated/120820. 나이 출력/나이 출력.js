function solution(age) {
    var answer = 0;
    if(age >= 2022){
        answer = -(2022 - age - 1);
    } else {
        answer = -(age -2022 - 1)
    }
    return answer;
}