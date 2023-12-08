function solution(a, b) {
    var answer = 0;
    let n = a.toString() + b.toString();
    if(parseInt(n) > 2 * a * b){
        answer = parseInt(n)
    } else {
        answer = 2 * a * b
    }
    return answer;
}