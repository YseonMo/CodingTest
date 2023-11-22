function solution(a, b) {
    let answer = 0;
    a = a.toString();
    b = b.toString();
    
    if (a+b > b+a){
        answer = parseInt(a+b)
    } else {
        answer = parseInt(b+a)
    }
    return answer;
}