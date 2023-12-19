function solution(myString) {
    var answer = '';
    answer = [...myString].map((v) => v < 'l' ? 'l' : v).join('')
    return answer;
}