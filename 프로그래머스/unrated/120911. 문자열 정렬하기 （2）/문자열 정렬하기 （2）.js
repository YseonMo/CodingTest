function solution(my_string) {
    var answer = '';
    my_string2 = my_string.toLowerCase();
    my_string2 = [...my_string2]
    answer = my_string2.sort().join('');
    
    console.log(my_string2)
    return answer;
}