function solution(myString, pat) {
    var answer = 0;
    for(let i = 0; i < myString.length; i++){
        let subs = myString.slice(i, i+pat.length)
        if(subs === pat) answer ++
    }
    return answer;
}