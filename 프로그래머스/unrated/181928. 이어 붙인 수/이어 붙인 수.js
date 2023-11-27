function solution(num_list) {
    let answer = 0;
    let even = num_list.filter(n => n % 2 === 0).reduce((acc, cur) => acc + cur, '');
    let odd = num_list.filter(n => n % 2 === 1).reduce((acc, cur) => acc + cur, '');
    answer = parseInt(even) + parseInt(odd)
    return answer;
}