function solution(my_string) {
    var answer = 0;
    let num = my_string.replace(/[^0-9]/g,'')
    num1 = [...num]
    console.log(num1)
    for(let i = 0; i < num1.length; i++){
        answer += parseInt(num[i])
    }
    return answer;
}