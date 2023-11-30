function solution(money) {
    var answer = [];
    let count = '';
    let rest = '';
    count = parseInt(money / 5500)
    rest = money % 5500
    answer.push(count)
    answer.push(rest)
    return answer;
}