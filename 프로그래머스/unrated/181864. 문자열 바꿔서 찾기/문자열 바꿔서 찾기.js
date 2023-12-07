function solution(myString, pat) {
    var answer = 0;
    answer = [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0
    return answer;
}