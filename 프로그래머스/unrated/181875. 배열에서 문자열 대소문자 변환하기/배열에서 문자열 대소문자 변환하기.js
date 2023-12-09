function solution(strArr) {
    var answer = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr.indexOf(strArr[i]) % 2 === 1){
            strArr[i] = strArr[i].toUpperCase();
        } else {
            strArr[i] = strArr[i].toLowerCase();
        }
    } answer = strArr
    return answer;
}