function solution(my_string) {
    var answer = [];
    my_string2 = [...my_string];
    
    for(let i = 0; i < my_string2.length; i++){
        if(my_string2[i] === my_string2[i].toUpperCase()){
            answer.push(my_string2[i].toLowerCase())
        } else {
            answer.push(my_string2[i].toUpperCase())
        }
    }
    return answer.join('');
}